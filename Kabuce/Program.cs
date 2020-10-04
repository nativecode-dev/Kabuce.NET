using System;
using System.Diagnostics.CodeAnalysis;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Serilog;

namespace Kabuce
{
    [SuppressMessage("ReSharper", "ClassNeverInstantiated.Global")]
    public class Program
    {
        public static void Main(string[] args)
        {
            try
            {
                CreateHostBuilder(args).Build().Run();
            }
            catch (Exception ex)
            {
                Log.Logger.Error(ex, ex.Message);
            }
        }

        [SuppressMessage("ReSharper", "MemberCanBePrivate.Global")]
        public static IHostBuilder CreateHostBuilder(string[] args)
        {
            return Host.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((context, builder) =>
                {
                    Log.Logger = new LoggerConfiguration().MinimumLevel.Debug().ReadFrom
                        .Configuration(context.Configuration).WriteTo
                        .Console().CreateLogger();
                })
                .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseSerilog().UseStartup<Startup>(); });
        }
    }
}