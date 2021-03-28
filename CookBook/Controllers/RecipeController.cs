using CookBook.Models;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using System.Linq;

namespace CookBook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        /// <summary>
        /// Context.
        /// </summary>
        private readonly ApiContext _db;

        public RecipeController(ApiContext db)
        {
            _db = db;
        }

        [HttpGet(Name = "GetRecipe")]
        public IActionResult Get()
        {
            IOrderedQueryable<Recipe> query = _db.Recipes.OrderBy(x => x.RecipeId);

            return Ok(query);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Recipe recipe)
        {
            if (recipe == null)
            {
                return BadRequest("Invalid data.");
            }

            _db.Recipes.Add(recipe);
            _db.SaveChanges();

            return CreatedAtRoute("GetRecipe", new { id = recipe.RecipeId }, recipe);
        }

        [HttpPut]
        public IActionResult Put(Recipe recipe)
        {
            if (recipe == null)
            {
                return BadRequest("Invalid data.");
            }

            _db.Entry(recipe).State = EntityState.Modified;
            _db.SaveChanges();

            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Not a valid recipe id");
            }

            Recipe query = _db.Recipes.Find(id);

            if (query == null)
            {
                return NotFound();
            }

            _db.Recipes.Remove(query);
            _db.SaveChanges();

            return Ok();
        }

        [Route("GetAllIngredientNames")]
        public IActionResult GetAllIngredientNames()
        {
            IQueryable<string> query = _db.Ingredients.Select(x => x.Title);

            return Ok(query);
        }
    }
}