﻿using BL;
using DTO;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace corectMaonProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        MessagesBL _MessagesBL = new MessagesBL();

        [HttpGet]
        [Route("getAll")]
        //שליפה
        public IActionResult getAll()
        {
            return Ok(_MessagesBL.getAll());

        }

        [HttpGet]
        [Route("getMessgesByTeachID/{teacherId}")]

        public IActionResult GetMessgesByTeacher(int teacherId)
        {
            return Ok(_MessagesBL.GetMessgesByTeacher(teacherId));

        }
        [HttpPut]
        //עדכון
        public IActionResult update(MessagesDTO Messages)
        {
            return Ok(_MessagesBL.update(Messages));

        }
        [HttpPost]
        //הוספה
        public IActionResult AddMessages(MessagesDTO Messages)
        {
            return Ok(_MessagesBL.AddMessages(Messages));

        }
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            return Ok(_MessagesBL.Delete(id));

        }
   
   

    }
}
