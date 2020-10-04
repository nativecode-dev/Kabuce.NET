using CouchDB.Driver;
using CouchDB.Driver.Options;
using Kabuce.Documents;

namespace Kabuce.Types
{
    public partial class DataContext : CouchContext
    {
        public DataContext(CouchOptions<DataContext> options) : base(options)
        {
        }

        public CouchDatabase<UserDevice> Devices { get; set; }
        
        public CouchDatabase<Organization> Organizations { get; set; }
    }
}