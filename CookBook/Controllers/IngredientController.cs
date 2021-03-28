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
        private readonly ApiContext _db;

        public IngredientController(ApiContext db)
        {
            _db = db;
        }

        [HttpGet]
        public JsonResult Get()
        {
            IOrderedQueryable<Ingredient> query = _db.Ingredients.OrderBy(x => x.IngredientId);

            return new JsonResult(query);
        }

        [HttpPost]
        public JsonResult Post(Ingredient ingredient)
        {
            _db.Ingredients.Add(ingredient);
            _db.SaveChanges();

            return new JsonResult("Add successesfully");
        }

        [HttpPut]
        public JsonResult Put(Ingredient ingredient)
        {
            _db.Entry(ingredient).State = EntityState.Modified;
            _db.SaveChanges();

            return new JsonResult("Update successesfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            Ingredient query = _db.Ingredients.Find(id);
            _db.Ingredients.Remove(query);
            _db.SaveChanges();

            return new JsonResult("Deleted successesfully");
        }
    }
}
