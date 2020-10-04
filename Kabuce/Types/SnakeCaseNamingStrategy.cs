using System.Text.Json;
using Humanizer;

namespace Kabuce.Types
{
    public class SnakeCaseNamingStrategy : JsonNamingPolicy
    {
        public override string ConvertName(string name)
        {
            return name.Underscore();
        }
    }
}