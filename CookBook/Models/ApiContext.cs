using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CookBook.Models
{
    /// <summary>
    /// Data context class.
    /// </summary>
    public class ApiContext : DbContext
    {
        /// <summary>
        /// Constructor for connection.
        /// </summary>
        /// <param name="options"> Context options. </param>
        public ApiContext(DbContextOptions<ApiContext> options) : base(options) { }

        /// <summary>
        /// Ingredient table.
        /// </summary>
        public DbSet<Ingredient> Ingredients { get; set; }

        /// <summary>
        /// Recipe table.
        /// </summary>
        public DbSet<Recipe> Recipes { get; set; }
    }
}
