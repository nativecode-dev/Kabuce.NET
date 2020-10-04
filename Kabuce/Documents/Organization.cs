using CouchDB.Driver.Types;

namespace Kabuce.Documents
{
    public class Organization : CouchDocument
    {
        public string Domain { get; set; }
        
        public string Name { get; set; }
    }
}