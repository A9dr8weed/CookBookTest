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

        [HttpGet]
        public JsonResult Get()
        {
            IOrderedQueryable<Recipe> query = _db.Recipes.OrderBy(x => x.RecipeId);

            return new JsonResult(query);
        }

        [HttpPost]
        public JsonResult Post(Recipe recipe)
        {
            _db.Recipes.Add(recipe);
            _db.SaveChanges();
            return new JsonResult("Add successesfully");
        }

        [HttpPut]
        public JsonResult Put(Recipe recipe)
        {
            _db.Entry(recipe).State = EntityState.Modified;
            _db.SaveChanges();
            return new JsonResult("Update successesfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            Recipe query = _db.Recipes.Find(id);
            _db.Recipes.Remove(query);
            _db.SaveChanges();
            return new JsonResult("Deleted successesfully");
        }

        [Route("GetAllIngredientNames")]
        public JsonResult GetAllIngredientNames()
        {
            IQueryable<string> query = _db.Ingredients.Select(x => x.Title);
            return new JsonResult(query);
        }
    }
}