using System.ComponentModel.DataAnnotations;

namespace CookBook.Models
{
    /// <summary>
    /// Ingredient model.
    /// </summary>
    public class Ingredient
    {
        /// <summary>
        /// Ingredient Id.
        /// </summary>
        [Key]
        public int IngredientId { get; set; }

        /// <summary>
        /// Ingredient title.
        /// </summary>
        public string Title { get; set; }
    }
}