using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using Microsoft.Extensions.Options;
using Services;
using Filters;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddTransient<IPersonStorage, TextFilesPersonStorage>();
builder.Services.Configure<HelloOptions>(builder.Configuration.GetSection("Hello")); // Dependency injection

var app = builder.Build();

app.MapControllers();
// app.Use(async (context, next) =>
// {
//     await next.Invoke();
//     Console.WriteLine($"{context.Request.Path} was handled");
// });

app.Use(async (context, next) =>
{
    if (context.Request.Path == "/api/person/sayHello")
    {
        if (!context.Request.Headers.ContainsKey("HelloApiToken"))
        {
            Console.WriteLine($"{context.Request.Path} was requested but there is no HelloApiTokenHeader");
            context.Response.StatusCode = 401;
            return;
        }
        if (context.Request.Headers["HelloApiToken"] != builder.Configuration["HelloApiToken"] as string)
        {
            Console.WriteLine($"{context.Request.Path} was requested but the HelloApiToken is {context.Request.Headers["HelloApiToken"]} instead of 'MyHelloApiToken'");
            context.Response.StatusCode = 401;
            return;
        }
    }
    await next.Invoke();
});

app.Run("https://localhost:5000");
