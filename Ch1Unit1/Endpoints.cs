using DB;
using Microsoft.AspNetCore.Mvc;

class EndPointManager
{
    WebApplication app;
    MemoryDB DB;

    public EndPointManager(WebApplication webApp)
    {
        app = webApp;
        DB = new MemoryDB();
        DB.Seed();

        app.MapGet("/helloworld", () =>
        {
            System.Console.WriteLine("Welcome helloworld");
            return Results.Ok("Helloworld!");
        });

        app.MapGet("/FetchPerson", FetchPerson);
        app.MapGet("/FetchPerson/{id}", FetchPerson);
        app.MapPost("/AddPerson", AddPerson);
        app.MapPut("/person", UpSertPerson);
        app.MapDelete("/person/{id}", DeletePerson);
        app.MapDelete("/person/", DeletePerson);
        app.MapPost("/person/friend", AddFriend);
        app.MapGet("/person/friend/", FindFriendsFromQuery);
        app.MapGet("/person/friend/{id}", FindFriends);
    }

    private IResult FetchPerson(int id)
    {
        var existingPerson = DB.Persons.FirstOrDefault(_ => _.Id == id);

        if (existingPerson != null)
        {
            return Results.Ok($"{existingPerson}");
        }
        
        return Results.Ok($"Person record with id: {id} not found");
    }

    private IResult AddPerson(Person p)
    {
        var existingPerson = DB.Persons.FirstOrDefault(_ => _.Id == p.Id);
        
        if (existingPerson != null)
        {
            return Results.BadRequest($"Person with id: {p.Id} already present!");
        }

        DB.Persons.Add(p);
        return Results.Ok($"Person record with id: {p.Id} added!");
    }

    private IResult UpSertPerson(Person p)
    {
        var existingPerson = DB.Persons.FirstOrDefault(_ => _.Id == p.Id);

        if (existingPerson != null)
        {
            DB.Persons.Remove(existingPerson);
            existingPerson = existingPerson with { Age = p.Age, Name = p.Name };
            DB.Persons.Add(existingPerson);

            return Results.Ok($"Updated id: {p.Id}");
        }

        return AddPerson(p);
    }

    private IResult DeletePerson(int id)
    {
        var existingPerson = DB.Persons.FirstOrDefault(_ => _.Id == id);

        if (existingPerson != null)
        {
            DB.Persons.Remove(existingPerson);
            RemoveFriendShips(id);

            return Results.Ok($"id: {id} DELETED");
        }

        return Results.NotFound($"id: {id} NOT FOUND -> NOT DELETED!");
    }

    private void RemoveFriendShips(int id)
    {
        DB.Friendships.RemoveAll(_ => _.FromId == id || _.ToId == id);
    }

    private IResult AddFriend(FriendWith link)
    {
        if (link.FromId != link.ToId)
        {
            var existingPerson1 = DB.Persons.FirstOrDefault(_ => _.Id == link.FromId);
            var existingPerson2 = DB.Persons.FirstOrDefault(_ => _.Id == link.ToId);

            if (link.FromId != link.ToId && existingPerson1 != null && existingPerson2 != null)
            {
                if (!DB.Friendships.Contains(link))
                {
                    DB.Friendships.Add(link);
                    DB.Friendships.Add(new FriendWith(link.ToId, link.FromId));

                    return Results.Ok($"id: {link.FromId} is now friends with id: {link.ToId}");
                }
                
                return Results.BadRequest($"id: {link.FromId} was already friends with id: {link.ToId}!");
            }

            return Results.NotFound($"id: {link.FromId} OR id: {link.ToId} NOT FOUND!");
        }

        return Results.BadRequest($"FromId: {link.FromId} == ToId{link.ToId} NOT POSSIBLE");
    }

    private IResult FindFriendsFromQuery([FromQuery] int id)
    {
        var existingPerson = DB.Persons.FirstOrDefault(_ => _.Id == id);

        if (existingPerson != null)
        {
            var links = DB.Friendships.Where(_ => _.FromId == id).Select(_ => _.ToId);
            
            var friends = string.Join("--- ",
            (
                from friendship in DB.Friendships
                join friend in DB.Persons on friendship.ToId equals friend.Id
                where friendship.FromId == id
                select friend
            )
            .ToList()
            );

            return Results.Ok($"{existingPerson} has these friends: --- {friends}");
        }

        return Results.NotFound($"Person with id: {id} not found!");
    }

    private IResult FindFriends(int id)
    {
        var existingPerson = DB.Persons.FirstOrDefault(_ => _.Id == id);

        if (existingPerson != null)
        {

            var friendList = 
            (
                from friendship in DB.Friendships
                join friend in DB.Persons on friendship.ToId equals friend.Id
                where friendship.FromId == id
                select friend
            )
            .ToList();

            return Results.Ok(new {person = existingPerson, friends = friendList});
        }

        return Results.NotFound($"Person with id: {id} not found!");
    }
}
