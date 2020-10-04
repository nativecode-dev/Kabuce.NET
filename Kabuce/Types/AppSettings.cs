using System.Collections.Generic;
using System.Runtime.CompilerServices;

namespace Kabuce.Types
{
    public class AppSettings : Dictionary<string, string>
    {
        public string Email
        {
            get => GetValue();
            set => SetValue(null, value);
        }

        private string GetValue([CallerMemberName] string key = null)
        {
            if (key != null && ContainsKey(key)) return this[key];

            return null;
        }

        private void SetValue([CallerMemberName] string key = null, string value = null)
        {
            if (key != null) Add(key, value);
        }
    }
}