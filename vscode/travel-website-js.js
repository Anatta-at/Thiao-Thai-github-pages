document.addEventListener("DOMContentLoaded", () => {
  const destinationsGrid = document.getElementById("destinationsGrid");
  const reviewsGrid = document.getElementById("reviewsGrid");

  const destinations = [
    {
        title: "เชียงใหม่",
        info: "เมืองแห่งวัฒนธรรม",
        image: "https://blog.bangkokair.com/wp-content/uploads/2023/09/visit-chiang-mai-during-the-rainy-season-1.jpeg"
    },
    {
        title: "ภูเก็ต",
        info: "ทะเลที่สวยงาม",
        image: "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/05/%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%99%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-2024-05-20T120256.309.png"
    },
    {
      title: "กระบี่",
      info: "ทะเลที่สวยงาม",
      image: "https://jeeor.com/wp-content/uploads/2020/03/เกาะพีพี.jpg"
  },
  {
    title: "น่าน",
    info: " เมืองสงบที่แฝงไปด้วยเสน่ห์ของธรรมชาติและวัฒนธรรมล้านนาตะวันออก",
    image: "https://media.istockphoto.com/id/1182204089/th/รูปถ่าย/ภูมิทัศน์ที่สวยงามของชั้นภูเขาในช่วงพระอาทิตย์ตกดิน.jpg?s=612x612&w=0&k=20&c=0gbCy0VojNfTR7hsfe38vj11rEVSOMc4NKJKkrFZlGg="
},
{
  title: "ราชบุรี",
  info: "เมืองแห่งศิลปะ วัฒนธรรม และธรรมชาติใกล้กรุงเทพฯ",
  image: "https://www.hotelwisma.com/wp-content/uploads/2024/02/ratchaburi-attraction-10-upscaled.jpg"
},


];

  const reviews = [
    { stars: "⭐⭐⭐⭐⭐", text: "การบริการดีเยี่ยม!", author: "เอิร์นรี่" },
    { stars: "⭐⭐⭐", text: "โดยรวมดี แต่มีบางจุดที่ควรปรับปรุง", author: "อมรเทพ พิทักษ์ชัย" },
    { stars: "⭐⭐⭐⭐", text: "ทริปที่น่าจดจำที่สุด", author: "กัญญา วิชัยวงศ์" },
    { stars: "⭐⭐⭐⭐", text: "เหมาะกับการพักผ่อนแบบส่วนตัว", author: "วิทยา เจริญสุข" },
    { stars: "⭐⭐⭐⭐", text: "การเดินทางที่ยอดเยี่ยม", author: "อชนินทร์ ภูมิพัฒน์" },
    { stars: "⭐⭐⭐⭐", text: "อากาศดี แต่การบริการพอใช้", author: "อภิสรา วราสิทธิ์" },
    { stars: "⭐⭐⭐⭐", text: "ธรรมชาติสวยและบรรยากาศดี", author: "ชุติมา วรธรรม" },
  ];
  
  // ฟังก์ชันแสดงจุดหมายปลายทาง
  const renderDestinations = () => {
    destinationsGrid.innerHTML = destinations
      .map(
        (dest) => `
      <div class="destination-card" data-title="${dest.title}">
        <img src="${dest.image}" alt="${dest.title}" class="destination-img">
        <div class="destination-content">
          <h3 class="destination-title">${dest.title}</h3>
          <p>${dest.info}</p>
        </div>
      </div>`
      )
      .join("");

    // เพิ่ม event listener ให้กับการ์ดหลังจากที่สร้างเนื้อหาเสร็จ
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
  };
  
  // ฟังก์ชันแสดงรีวิว
  const renderReviews = () => {
    reviewsGrid.innerHTML = reviews
      .map(
        (review) => `
      <div class="review-card">
        <div class="review-stars">${review.stars}</div>
        <p>${review.text}</p>
        <div class="review-author">
          <span>${review.author}</span>
        </div>
      </div>`
      )
      .join("");
  };
  
  // เรียกใช้ฟังก์ชัน
  renderDestinations();
  renderReviews();
});
const searchButton = document.querySelector('.search-bar button');
searchButton.addEventListener('click', () => {
  const searchInput = document.querySelector('.search-bar input');
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
      console.log(`Searching for: ${searchTerm}`);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const fadeIns = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
      (entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("show");
                  observer.unobserve(entry.target); // หยุดสังเกตเมื่อแสดงผลแล้ว
              }
          });
      },
      {
          threshold: 0.2, // แสดงเมื่อองค์ประกอบ 20% เข้าสู่ viewport
      }
  );

  fadeIns.forEach(fadeIn => observer.observe(fadeIn));
});