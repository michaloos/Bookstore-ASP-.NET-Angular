using Microsoft.EntityFrameworkCore;
using Bookstore_ASP_.NET_Angular.Models;

namespace Bookstore_ASP_.NET_Angular.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<AutorModel> Autors { get; set; }
        public DbSet<BookModel> Books { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
