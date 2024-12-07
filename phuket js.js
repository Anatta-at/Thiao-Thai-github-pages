
// Example JavaScript functionality
console.log('Welcome to Explore Chiang Mai!');

document.addEventListener('DOMContentLoaded', () => {
  const adminLink = document.querySelector('a[href="#admin"]'); // ค้นหาลิงก์ "สำหรับ admin"
  const modal = document.getElementById('management-modal');
  const closeModal = document.querySelector('.close-modal');
  
  const btnEditDestination = document.getElementById('btn-edit-destination');
  const btnDeleteDestination = document.getElementById('btn-delete-destination');
  const btnAddDestination = document.getElementById('btn-add-destination');

  // รหัสผ่านที่กำหนดไว้
  const adminPassword = "123456"; // คุณสามารถเปลี่ยนรหัสผ่านได้ตามต้องการ

  // เปิด Modal เมื่อคลิก "สำหรับ admin" หลังใส่รหัสผ่านถูกต้อง
  adminLink.addEventListener('click', (event) => {
      event.preventDefault(); // ป้องกันการกระโดดลิงก์

      let isAuthenticated = false;

      while (!isAuthenticated) {
          const inputPassword = prompt("กรุณาใส่รหัสผ่านเพื่อเข้าถึงการจัดการ:");
          if (inputPassword === null) {
              // หากผู้ใช้กด Cancel ให้ออกจาก loop และไม่ทำอะไร
              alert("ยกเลิกการเข้าถึงการจัดการ");
              return;
          } else if (inputPassword === adminPassword) {
              // หากรหัสผ่านถูกต้อง
              isAuthenticated = true;
              modal.style.display = 'block';
          } else {
              alert("รหัสผ่านไม่ถูกต้อง! กรุณาใส่ใหม่");
          }
      }
  });

  // ปิด Modal
  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  // ปิด Modal เมื่อคลิกนอกกรอบ
  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});

  // ฟังก์ชันแก้ไข
  btnEditDestination.addEventListener('click', () => {
      const destinations = document.querySelectorAll('.destination-card');
      const destinationList = Array.from(destinations).map((dest, index) => 
          `${index + 1}. ${dest.querySelector('h3').textContent}`
      ).join('\n');
      
      const selectedIndex = prompt(`เลือกสถานที่ที่ต้องการแก้ไข:\n${destinationList}`);
      
      if (selectedIndex) {
          const index = parseInt(selectedIndex) - 1;
          const selectedDestination = destinations[index];
          
          const newTitle = prompt('แก้ไขชื่อ:', selectedDestination.querySelector('h3').textContent);
          const newDescription = prompt('แก้ไขคำอธิบาย:', selectedDestination.querySelector('p').textContent);
          
          if (newTitle && newDescription) {
              selectedDestination.querySelector('h3').textContent = newTitle;
              selectedDestination.querySelector('p').textContent = newDescription;
          }
      }
      
      modal.style.display = 'none';
  });

  // ฟังก์ชันลบ
  btnDeleteDestination.addEventListener('click', () => {
      const destinations = document.querySelectorAll('.destination-card');
      const destinationList = Array.from(destinations).map((dest, index) => 
          `${index + 1}. ${dest.querySelector('h3').textContent}`
      ).join('\n');
      
      const selectedIndex = prompt(`เลือกสถานที่ที่ต้องการลบ:\n${destinationList}`);
      
      if (selectedIndex) {
          const index = parseInt(selectedIndex) - 1;
          const selectedDestination = destinations[index];
          
          if (confirm(`คุณต้องการลบ "${selectedDestination.querySelector('h3').textContent}" ใช่หรือไม่?`)) {
              selectedDestination.remove();
          }
      }
      
      modal.style.display = 'none';
  });

  // ฟังก์ชันเพิ่ม
  btnAddDestination.addEventListener('click', () => {
      const newTitle = prompt('ป้อนชื่อสถานที่:');
      const newDescription = prompt('ป้อนคำอธิบาย:');
      const newImageUrl = prompt('ป้อน URL รูปภาพ:');

      if (newTitle && newDescription && newImageUrl) {
          const destinationsGrid = document.querySelector('.destinations-grid');
          const newCard = document.createElement('div');
          newCard.classList.add('destination-card');
          newCard.innerHTML = `
              <img src="${newImageUrl}" alt="${newTitle}">
              <h3>${newTitle}</h3>
              <p>${newDescription}</p>
          `;
          destinationsGrid.appendChild(newCard);
      }
      
      modal.style.display = 'none';
  });

const destinationCards = document.querySelectorAll('.destination-card');
destinationCards.forEach(card => {
  card.addEventListener('click', () => {
    if (card.dataset.title === "เชียงใหม่") {
      window.location.href = '/chiangmai/indexchiangmai2.html'; // เปลี่ยนหน้าไปยัง chiangmai.html
    } else if (card.dataset.title === "ภูเก็ต") {
      window.location.href = '/phuket/phuket.html'; // เปลี่ยนหน้าไปยัง phuket.html
    }
  });
});

const searchButton = document.querySelector('.search-bar button');
searchButton.addEventListener('click', () => {
  const searchInput = document.querySelector('.search-bar input');
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
      console.log(`Searching for: ${searchTerm}`);
  }
});