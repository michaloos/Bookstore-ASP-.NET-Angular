using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Bookstore_ASP_.NET_Angular.Data;
using Bookstore_ASP_.NET_Angular.Models;

namespace Bookstore_ASP_.NET_Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutorModelsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AutorModelsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/AutorModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AutorModel>>> GetAutors()
        {
            return await _context.Autors.ToListAsync();
        }

        // GET: api/AutorModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AutorModel>> GetAutorModel(int id)
        {
            var autorModel = await _context.Autors.FindAsync(id);

            if (autorModel == null)
            {
                return NotFound();
            }

            return autorModel;
        }

        // PUT: api/AutorModels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAutorModel(int id, AutorModel autorModel)
        {
            if (id != autorModel.AutorId)
            {
                return BadRequest();
            }

            _context.Entry(autorModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AutorModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/AutorModels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AutorModel>> PostAutorModel(AutorModel autorModel)
        {
            _context.Autors.Add(autorModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAutorModel", new { id = autorModel.AutorId }, autorModel);
        }

        // DELETE: api/AutorModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAutorModel(int id)
        {
            var autorModel = await _context.Autors.FindAsync(id);
            if (autorModel == null)
            {
                return NotFound();
            }

            _context.Autors.Remove(autorModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AutorModelExists(int id)
        {
            return _context.Autors.Any(e => e.AutorId == id);
        }
    }
}
