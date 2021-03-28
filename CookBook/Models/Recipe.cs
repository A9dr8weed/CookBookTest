using System;
using System.ComponentModel.DataAnnotations;

namespace CookBook.Models
{
    /// <summary>
    /// Recipe model.
    /// </summary>
    public class Recipe
    {
        /// <summary>
        /// Recipe Id.
        /// </summary>
        public int RecipeId { get; set; }

        /// <summary>
        /// Recipe title.
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Created date.
        /// </summary>
        [DataType(DataType.Date)]
        public DateTime CreatedOn { get; set; }

        /// <summary>
        /// Ingredient.
        /// </summary>
        public string Ingredient { get; set; }
    }
}