var learnAnythingList = 
[
    ["https://www.khanacademy.org/", "Khan Academy", 
    `For every student, every classroom. Real results. We’re a nonprofit with
    the mission to provide a free, world-class education for anyone, anywhere.`],
    ["https://www.coursera.org/", "Coursera",
    `Your Course to Success. Build skills with courses, certificates, and degrees online from world-class 
    universities and companies.`],
    ["https://opportunity.linkedin.com/skills-for-in-demand-jobs", "LinkedIn x Microsoft",
    `Learn relevant skills for jobs in-demand. Start developing your skills for free with learning paths 
    from LinkedIn Learning and Microsoft Learn, then practice tech skills in the GitHub Learning Lab.`],
    ["https://www.futurelearn.com/", "Future Learn",
    `This is Future Learning. Learn 100% online with world class universities and industry experts. 
    Develop hobbies, new skills and career-changing expertise with our flexible courses.`],
    ["https://www.typing.com/", "Typing.com",
    `Teaching the Foundations of Technology, Keyboarding, Digital Literacy, & Coding. 
    Powerful District & Classroom Management. FREE for Everyone!`]
]; 

var learnProgrammingList = 
[
    ["https://www.sololearn.com/", "SoloLearn", 
    `Learn to code for free! Interactive lessons, "on-the-go" practice, peer support.`],
    ["https://www.codecademy.com/", "Codecademy",
    `Join the Millions Learning to Code With Codecademy.`],
    ["https://www.w3schools.com/", "W3Schoolst",
    `The World's Largest Web Developer Site.`],
    ["https://www.freecodecamp.org/", "freeCodeCamp",
    `Learn to code — for free. Build projects. Earn certifications.`],
    ["https://www.datacamp.com/", "DataCamp",
    `Build data skills online. Data drives everything. Get the skills you need for the future of work.`]
]; 

var freeProgrammingBooksList = 
[
    ["https://goalkicker.com/", "GoalKicker", 
    `Programming Notes for Professionals books.`]
]; 

var learnInThaiList = 
[
    ["https://mooc.chula.ac.th/", "CHULA MOOC",
    `คอร์สเรียนออนไลน์ฟรีที่จุฬาลงกรณ์มหาวิทยาลัย เพราะเราเชื่อว่าทุกคนมีสิทธิที่จะเรียนรู้ และควรจะได้เรียนรู้ตลอดชีวิต มาร่วมกันฝึกทักษะทางความคิด
    ความสามารถ และสติปัญญาเพื่อพัฒนาศักยภาพของตนเองได้ที่ CHULA MOOC`],
    ["https://thaimooc.org/", "Thai MOOC",
    `การศึกษาระบบเปิดเพื่อการเรียนรู้ตลอดชีวิต โครงการมหาวิทยาลัยไซเบอร์ไทย (Thailand Cyber University) กระทรวงการอุดมศึกษา 
    วิทยาศาสตร์ วิจัยและนวัตกรรม`],
    ["https://www.starfishlabz.com/", "Starfish Labz",
    `แหล่งเรียนรู้และชุมชนออนไลน์แห่งแรกของประเทศ สำหรับนักการศึกษาและผู้ปกครอง ที่ใช้ง่าย กระชับ แต่อัดแน่นไปด้วยเนื้อหาและกิจกรรมสนุก ๆ 
    ในเรื่องการจัดการศึกษาแนวใหม่ การพัฒนาการเด็ก นวัตกรรมและเทคโนโลยีเพื่อการศึกษา`],
    ["https://www.borntodev.com/", "BorntoDev",
    `เรียนรู้ทักษะแห่งอนาคต พัฒนาคุณให้กลายเป็นนักพัฒนาเทคโนโลยีรุ่นใหม่ สร้างสรรค์แอปพลิเคชันและผลงานด้านดิจิทัล ด้วยหลักสูตรที่ลงลึกจัดเต็มทั้งศาสตร์และศิลป์ 
    จากผู้มีประสบการณ์เชี่ยวชาญด้านเทคโนโลยีตัวจริง`],
    ["https://www.skooldio.com/", "Skooldio",
    `อัพสกิลให้คุณพร้อมแข่งขันในยุคดิจิทัล ครบทุกทักษะที่จำเป็นในการทำงาน ผ่านการเรียนในรูปแบบคอร์สออนไลน์หรือเวิร์คชอป`],
    ["https://elearning.set.or.th/", "SET e-Learning",
    `หลักสูตรออนไลน์อัดแน่นเนื้อหาการวางแผนการเงินการลงทุน แหล่งความรู้การเงินการลงทุนแบบดิจิทัล ผสมผสานเทคโนโลยีมัลติมีเดีย พร้อมบทเรียนที่เหมาะสำหรับนิสิต 
    นักศึกษา และนักลงทุนที่ต้องการพัฒนาตนเองไปสู่นักลงทุนมืออาชีพแบบ Step by Step`],
    ["https://course.digitalskill.org/", "Digital Skill",
    `เวมสาระ ที่ควรรู้ในโลกดิจิทัล เรียนรู้ทักษะดิจิทัล อัพเดทข่าวโลกไอที พร้อมค้นหางานที่คุณสนใจ`]

]

function listGen(dataList, section){

    let list = document.getElementById(section); 

    dataList.forEach((item) => { 
        let li = document.createElement("li"); 
        li.innerHTML = `<a href=${item[0]} target='_blank'> ${item[1]} </a> <p>${item[2]}</p>`;
        list.appendChild(li); 
    }); 
}

function inProgress(){
    alert("This section is in progress :D");
    document.getElementById("mySidenav").style.width = "400px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeSidenav(){
    document.getElementById("mySidenav").style.width = "0px";
    document.body.style.backgroundColor = "white";
}
