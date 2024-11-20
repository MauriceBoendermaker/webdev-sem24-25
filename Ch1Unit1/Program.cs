var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();
app.Urls.Add("http://localhost:5000");

app.MapGet("/", () =>
{
    return Results.Ok("OK");
});

var endpointsManager = new EndPointManager(app);

app.Run();
