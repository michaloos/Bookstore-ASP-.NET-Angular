using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bookstore_ASP_.NET_Angular.Models
{
    public class BookModel
    {
        [Key]
        public int BookId { get; set; }
        public string Title { get; set; }
        [ForeignKey("AutorModel")]
        public int AutorId { get; set; }
        public int Year_of_publish { get; set; }
        [MaxLength(13)]
        [MinLength(13)]
        public string ISBN { get; set; }
        public virtual AutorModel Autor { get; set; }
    }
}
