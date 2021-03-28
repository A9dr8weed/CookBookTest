using CookBook.Models;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using System.Linq;

namespace CookBook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientController : ControllerBase
    {
        /// <summary>
        /// Context.
        /// </summary>
        private readonly ApiContext _db;

        public IngredientController(ApiContext db)
        {
            _db = db;
        }

        [HttpGet(Name = "GetIngredient")]
        public IActionResult Get()
        {
            IOrderedQueryable<Ingredient> query = _db.Ingredients.OrderBy(x => x.IngredientId);

            return Ok(query);
        }

        [HttpPost]
        public IActionResult Post(Ingredient ingredient)
        {
            if (ingredient == null)
            {
                return BadRequest("Invalid data.");
            }

            _db.Ingredients.Add(ingredient);
            _db.SaveChanges();

            return CreatedAtRoute("GetIngredient", new { id = ingredient.IngredientId }, ingredient);
        }

        [HttpPut]
        public IActionResult Put(Ingredient ingredient)
        {
            if (ingredient == null)
            {
                return BadRequest("Invalid data.");
            }

            _db.Entry(ingredient).State = EntityState.Modified;
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

            Ingredient query = _db.Ingredients.Find(id);

            if (query == null)
            {
                return NotFound();
            }

            _db.Ingredients.Remove(query);
            _db.SaveChanges();

            return Ok();
        }
    }
}
