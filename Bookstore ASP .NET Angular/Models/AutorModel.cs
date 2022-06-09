using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Bookstore_ASP_.NET_Angular.Models
{
    public class AutorModel
    {
        [Key]
        public int AutorId { get; set; }
        public string FisrtName { get; set;}
        public string LastName { get; set; }
        public string Country { get; set; }
        public virtual ICollection<BookModel> Books { get; set; }
    }
}
