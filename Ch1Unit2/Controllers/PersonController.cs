using Filters;
using Services;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace Controllers
{
    [Route("api/person")]
    public class PersonController : Controller
    {
        readonly IPersonStorage personStorage;

        public PersonController (IPersonStorage personStorage)
        {
            this.personStorage = personStorage;
        }

        [HelloHeaderActionFilter] // Attribute (annotation) from Filter
        [HttpGet("SayHello")]
        public async Task<IActionResult> SayHello() => Ok("Hello!");

        [HttpPost()]
        public async Task<IActionResult> CreatePerson([FromBody] Person person)
        {
            await personStorage.Create(person);
            return Ok();
        }

        [HttpPost("batch-add")]
        public async Task<IActionResult> CreatePeople([FromBody] Person[] people)
        {
            await personStorage.Create(people);
            return Ok();
        }

        [HttpGet()]
        public async Task<IActionResult> GetPerson([FromQuery] Guid personId)
        {
            var person = await personStorage.Find(personId);
            return person is null ? NotFound() : Ok(person);
        }

        [HttpGet("batch")]
        public async Task<IActionResult> GetPeople([FromQuery] Guid[] personIds) =>
            Ok((await personStorage.FindMany(personIds)).ToArray());

        [HttpDelete()]
        public async Task<IActionResult> DeletePerson([FromQuery] Guid personId)
        {
            await personStorage.Delete(personId);
            return Ok();
        }
    }
}
