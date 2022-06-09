﻿using System;
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
    public class BookModelsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BookModelsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/BookModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookModel>>> GetBooks()
        {
            return await _context.Books.ToListAsync();
        }

        // GET: api/BookModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BookModel>> GetBookModel(int id)
        {
            var bookModel = await _context.Books.FindAsync(id);

            if (bookModel == null)
            {
                return NotFound();
            }

            return bookModel;
        }

        // PUT: api/BookModels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookModel(int id, BookModel bookModel)
        {
            if (id != bookModel.BookId)
            {
                return BadRequest();
            }

            _context.Entry(bookModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookModelExists(id))
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

        // POST: api/BookModels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BookModel>> PostBookModel(BookModel bookModel)
        {
            _context.Books.Add(bookModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookModel", new { id = bookModel.BookId }, bookModel);
        }

        // DELETE: api/BookModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookModel(int id)
        {
            var bookModel = await _context.Books.FindAsync(id);
            if (bookModel == null)
            {
                return NotFound();
            }

            _context.Books.Remove(bookModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookModelExists(int id)
        {
            return _context.Books.Any(e => e.BookId == id);
        }
    }
}
