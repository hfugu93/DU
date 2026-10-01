/**
 * ASPDC - Apex Science, Polytechnic & Degree College
 * Main Application Logic (Pure JavaScript ES6+)
 * Handles Themes, Hotspot Tour, 360 Panoramas, Courses Filter,
 * Notice Board, Events Calendar, Student Portal, Gallery Lightbox, and Modals.
 */

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

const App = {
  activeTheme: "light",
  currentHotspotIndex: 0,
  activeCalendarDate: null,
  activeLightboxIndex: 0,
  activeGalleryItems: [],

  init() {
    this.initTheme();
    this.initNavbar();
    this.initHotspotsExplorer();
    this.initCourses();
    this.initNoticeBoard();
    this.initHackathonsArena();
    this.initEventsCalendar();
    this.initStudentDashboard();
    this.initAchievements();
    this.initGallery();
    this.initClubs();
    this.initModals();
    this.initScholarshipCalculator();
  },

  /* ------------------------------------------------------------------------
     1. THEME SWITCHER (Dark / Light Mode)
     ------------------------------------------------------------------------ */
  initTheme() {
    const savedTheme = localStorage.getItem("aspdc_theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    this.setTheme(savedTheme);

    const toggleBtn = document.getElementById("themeToggleBtn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const nextTheme = this.activeTheme === "light" ? "dark" : "light";
        this.setTheme(nextTheme);
      });
    }
  },

  setTheme(theme) {
    this.activeTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("aspdc_theme", theme);

    const toggleBtn = document.getElementById("themeToggleBtn");
    if (toggleBtn) {
      toggleBtn.innerHTML = theme === "dark"
        ? '<i class="fa-solid fa-sun" title="Switch to Light Mode"></i>'
        : '<i class="fa-solid fa-moon" title="Switch to Dark Mode"></i>';
    }
  },

  /* ------------------------------------------------------------------------
     2. NAVBAR & STICKY HEADER
     ------------------------------------------------------------------------ */
  initNavbar() {
    const header = document.querySelector(".site-header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    });

    // Mobile Hamburger
    const mobileBtn = document.getElementById("mobileMenuToggle");
    const navMenu = document.getElementById("navMenu");
    if (mobileBtn && navMenu) {
      mobileBtn.addEventListener("click", () => {
        navMenu.classList.toggle("mobile-open");
      });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", (e) => {
        const targetId = anchor.getAttribute("href");
        if (targetId === "#") return;
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth" });
          navMenu?.classList.remove("mobile-open");
        }
      });
    });
  },

  /* ------------------------------------------------------------------------
     3. ⭐ "EXPLORE YOUR COLLEGE" INTERACTIVE DASHBOARD & 360 TOUR
     ------------------------------------------------------------------------ */
  initHotspotsExplorer() {
    const data = window.CollegeData?.campusHotspots;
    if (!data || !data.length) return;

    const pillsContainer = document.getElementById("hotspotPills");
    const pinsContainer = document.getElementById("campusHotspotPins");

    if (pillsContainer) {
      pillsContainer.innerHTML = data.map((spot, idx) => `
        <button class="hotspot-pill-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}">
          <i class="fa-solid ${spot.icon}"></i>
          ${spot.shortName}
        </button>
      `).join("");

      pillsContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".hotspot-pill-btn");
        if (btn) {
          const idx = parseInt(btn.getAttribute("data-index"), 10);
          this.selectHotspot(idx);
        }
      });
    }

    if (pinsContainer) {
      pinsContainer.innerHTML = data.map((spot, idx) => `
        <div class="campus-hotspot-pin ${idx === 0 ? 'active' : ''}"
             style="left: ${spot.coords.x}%; top: ${spot.coords.y}%;"
             data-index="${idx}"
             title="${spot.name}">
          <div class="hotspot-marker-circle">
            <i class="fa-solid ${spot.icon}"></i>
            <div class="hotspot-pulse-ring"></div>
          </div>
          <div class="hotspot-label-tag">${spot.shortName}</div>
        </div>
      `).join("");

      pinsContainer.addEventListener("click", (e) => {
        const pin = e.target.closest(".campus-hotspot-pin");
        if (pin) {
          const idx = parseInt(pin.getAttribute("data-index"), 10);
          this.selectHotspot(idx);
        }
      });
    }

    this.selectHotspot(0);

    // 360 Virtual Tour Modal Trigger
    const openPanoBtn = document.getElementById("open360TourBtn");
    if (openPanoBtn) {
      openPanoBtn.addEventListener("click", () => {
        this.open360PanoramaModal(this.currentHotspotIndex);
      });
    }

    // Audio Guide button trigger
    const audioBtn = document.getElementById("playAudioGuideBtn");
    if (audioBtn) {
      audioBtn.addEventListener("click", () => {
        this.playAudioGuide(this.currentHotspotIndex);
      });
    }
  },

  selectHotspot(index) {
    const data = window.CollegeData?.campusHotspots;
    if (!data || !data[index]) return;
    this.currentHotspotIndex = index;
    const spot = data[index];

    // Update Pills and Pins active classes
    document.querySelectorAll(".hotspot-pill-btn").forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });
    document.querySelectorAll(".campus-hotspot-pin").forEach((pin, i) => {
      pin.classList.toggle("active", i === index);
    });

    // Update Map background view
    const mapImg = document.getElementById("campusMapImage");
    if (mapImg) {
      mapImg.src = spot.image;
    }

    // Update Detail Panel
    const panelTag = document.getElementById("hotspotDetailTag");
    const panelTitle = document.getElementById("hotspotDetailTitle");
    const panelDesc = document.getElementById("hotspotDetailDesc");
    const panelSpecs = document.getElementById("hotspotDetailSpecs");
    const panelAmenities = document.getElementById("hotspotDetailAmenities");

    if (panelTag) panelTag.innerHTML = `<i class="fa-solid ${spot.icon}"></i> ${spot.tag}`;
    if (panelTitle) panelTitle.innerHTML = `${spot.name} <span style="font-size:1.05rem; color:var(--kesar); font-weight:800; display:block; margin-top:0.25rem;">॥ ${spot.hindiShort} ॥</span>`;
    if (panelDesc) panelDesc.textContent = spot.details;

    if (panelSpecs) {
      panelSpecs.innerHTML = spot.specs.map(s => `
        <div class="spec-box">
          <span class="spec-label">${s.label}</span>
          <span class="spec-val">${s.val}</span>
        </div>
      `).join("");
    }

    if (panelAmenities) {
      panelAmenities.innerHTML = spot.amenities.map(a => `
        <span class="meta-chip"><i class="fa-solid fa-check text-green-500"></i> ${a}</span>
      `).join("");
    }
  },

  playAudioGuide(index) {
    const spot = window.CollegeData.campusHotspots[index];
    if (!spot) return;

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(`Welcome to the ${spot.name}. ${spot.shortDesc}. ${spot.details}`);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
      this.showToast(`Playing voice guide for ${spot.shortName}...`);
    } else {
      this.showToast(`Audio guide simulation: ${spot.name}`);
    }
  },

  open360PanoramaModal(index) {
    const spot = window.CollegeData.campusHotspots[index];
    if (!spot) return;

    const modal = document.getElementById("panoramaModal");
    const panoImg = document.getElementById("panoramaModalImg");
    const panoTitle = document.getElementById("panoramaModalTitle");

    if (modal && panoImg && panoTitle) {
      panoTitle.innerHTML = `<i class="fa-solid fa-vr-cardboard"></i> 360° Virtual Tour: ${spot.name}`;
      panoImg.src = spot.panoramaImage;
      modal.classList.add("active");

      this.initPanoramaInteractivity();
    }
  },

  initPanoramaInteractivity() {
    const wrapper = document.getElementById("panoramaImageWrapper");
    const container = document.getElementById("panoramaViewerContainer");
    if (!wrapper || !container) return;

    let isDragging = false;
    let startX = 0;
    let currentOffset = -50; // percentage

    const onMouseDown = (e) => {
      isDragging = true;
      startX = e.clientX || (e.touches && e.touches[0].clientX);
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const x = e.clientX || (e.touches && e.touches[0].clientX);
      const diff = (x - startX) * 0.15;
      currentOffset += diff;
      startX = x;
      wrapper.style.transform = `translateX(${currentOffset}px)`;
    };

    const onMouseUp = () => { isDragging = false; };

    container.onmousedown = onMouseDown;
    window.onmousemove = onMouseMove;
    window.onmouseup = onMouseUp;

    container.ontouchstart = onMouseDown;
    window.ontouchmove = onMouseMove;
    window.ontouchend = onMouseUp;

    // Pan controls buttons
    const leftBtn = document.getElementById("panoLeftBtn");
    const rightBtn = document.getElementById("panoRightBtn");
    if (leftBtn) {
      leftBtn.onclick = () => {
        currentOffset += 60;
        wrapper.style.transform = `translateX(${currentOffset}px)`;
      };
    }
    if (rightBtn) {
      rightBtn.onclick = () => {
        currentOffset -= 60;
        wrapper.style.transform = `translateX(${currentOffset}px)`;
      };
    }
  },

  /* ------------------------------------------------------------------------
     4. 🎓 COURSES SECTION
     ------------------------------------------------------------------------ */
  initCourses() {
    const courses = window.CollegeData?.courses || [];
    const container = document.getElementById("coursesGrid");
    const searchInput = document.getElementById("courseSearchInput");
    const filterTabs = document.getElementById("courseFilterTabs");

    let activeDept = "all";
    let searchQuery = "";

    const render = () => {
      if (!container) return;
      const filtered = courses.filter(c => {
        const matchesDept = activeDept === "all" || c.deptKey === activeDept || c.levelKey === activeDept;
        const q = searchQuery.toLowerCase();
        const matchesSearch = !q ||
          c.title.toLowerCase().includes(q) ||
          c.department.toLowerCase().includes(q) ||
          c.highlights.some(h => h.toLowerCase().includes(q));
        return matchesDept && matchesSearch;
      });

      if (filtered.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
            <i class="fa-solid fa-graduation-cap" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
            <h3>No courses match your search</h3>
            <p>Try searching for "Artificial Intelligence", "Robotics", "MBA", or "Cloud".</p>
          </div>
        `;
        return;
      }

      container.innerHTML = filtered.map(c => `
        <div class="course-card">
          <div class="course-card-header">
            <div class="course-icon-badge">
              <i class="fa-solid ${c.icon}"></i>
            </div>
            <span class="badge badge-primary">${c.badge}</span>
          </div>
          <div class="course-card-body">
            <div class="course-meta-chips">
              <span class="meta-chip"><i class="fa-regular fa-clock"></i> ${c.duration}</span>
              <span class="meta-chip"><i class="fa-solid fa-layer-group"></i> ${c.level}</span>
              <span class="meta-chip"><i class="fa-solid fa-chair"></i> ${c.seats}</span>
            </div>
            <h3 class="course-title">${c.title}</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
              <strong>Eligibility:</strong> ${c.eligibility}
            </p>
            <div class="course-highlights-list">
              ${c.highlights.slice(0, 3).map(h => `
                <div class="course-highlight-item">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>${h}</span>
                </div>
              `).join("")}
            </div>
          </div>
          <div class="course-card-footer">
            <div class="course-fee-info">
              <span class="fee-sub">Academic Fee</span>
              <span class="fee-amount">${c.fees}</span>
            </div>
            <button class="btn btn-primary btn-sm view-syllabus-btn" data-id="${c.id}">
              <span>Curriculum & Apply</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      `).join("");
    };

    render();

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        render();
      });
    }

    if (filterTabs) {
      filterTabs.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (btn) {
          filterTabs.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          activeDept = btn.getAttribute("data-dept") || "all";
          render();
        }
      });
    }

    // Modal Trigger for Course Syllabus & Apply
    if (container) {
      container.addEventListener("click", (e) => {
        const btn = e.target.closest(".view-syllabus-btn");
        if (btn) {
          const courseId = btn.getAttribute("data-id");
          this.openCourseModal(courseId);
        }
      });
    }
  },

  openCourseModal(courseId) {
    const course = window.CollegeData?.courses.find(c => c.id === courseId);
    if (!course) return;

    const modal = document.getElementById("courseDetailModal");
    const title = document.getElementById("courseModalTitle");
    const body = document.getElementById("courseModalBody");

    if (modal && title && body) {
      title.textContent = course.title;
      body.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom: 1rem;">
            <span class="badge badge-primary">${course.department}</span>
            <span class="badge badge-gold">${course.duration}</span>
            <span class="badge badge-success">Rating: ★ ${course.rating}</span>
          </div>
          <p style="color: var(--text-secondary); margin-bottom: 1rem;"><strong>Eligibility:</strong> ${course.eligibility}</p>
          <p style="color: var(--text-secondary);"><strong>Annual Tuition Fee:</strong> <span style="font-weight:700; color:var(--text-primary);">${course.fees}</span></p>
        </div>

        <h4 style="margin-bottom: 0.85rem; font-size:1.15rem; border-bottom:1px solid var(--border-color); padding-bottom:0.5rem;">
          <i class="fa-solid fa-book-bookmark text-primary"></i> Semester-wise Curriculum Overview
        </h4>
        <div style="display:flex; flex-direction:column; gap:0.75rem; margin-bottom: 1.5rem;">
          ${course.syllabus.map(s => `
            <div style="background:var(--bg-surface-secondary); padding:0.85rem 1rem; border-radius:var(--radius-md); border:1px solid var(--border-color);">
              <strong style="color:var(--primary-light); display:block; margin-bottom:0.25rem;">${s.sem}</strong>
              <p style="font-size:0.88rem; color:var(--text-secondary);">${s.topics}</p>
            </div>
          `).join("")}
        </div>

        <h4 style="margin-bottom: 0.75rem; font-size:1.15rem;">
          <i class="fa-solid fa-briefcase text-secondary"></i> Career Pathways
        </h4>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom: 2rem;">
          ${course.careers.map(car => `
            <span class="meta-chip"><i class="fa-solid fa-check-circle" style="color:var(--success)"></i> ${car}</span>
          `).join("")}
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-surface-secondary); padding:1.25rem; border-radius:var(--radius-lg); border:1px solid var(--border-color); flex-wrap:wrap; gap:1rem;">
          <div>
            <h5 style="font-weight:800; margin-bottom:0.2rem;">Ready to apply for 2025-26?</h5>
            <p style="font-size:0.85rem; color:var(--text-muted);">Applications are evaluated on merit & entrance scores.</p>
          </div>
          <button class="btn btn-primary" onclick="App.openAdmissionForm('${course.title}')">
            <i class="fa-solid fa-paper-plane"></i> Apply for this Program
          </button>
        </div>
      `;
      modal.classList.add("active");
    }
  },

  /* ------------------------------------------------------------------------
     5. 📢 SMART NOTICE BOARD
     ------------------------------------------------------------------------ */
  initNoticeBoard() {
    const notices = window.CollegeData?.notices || [];
    const listContainer = document.getElementById("noticeBoardList");
    const filterTabs = document.getElementById("noticeFilterTabs");
    const searchInput = document.getElementById("noticeSearchInput");

    let activeCat = "all";
    let searchQ = "";

    const render = () => {
      if (!listContainer) return;
      const filtered = notices.filter(n => {
        const matchesCat = activeCat === "all" || n.catKey === activeCat;
        const q = searchQ.toLowerCase();
        const matchesSearch = !q || n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q);
        return matchesCat && matchesSearch;
      });

      if (filtered.length === 0) {
        listContainer.innerHTML = `
          <div style="padding: 3rem; text-align: center; color: var(--text-muted);">
            <i class="fa-regular fa-bell-slash" style="font-size: 2.5rem; margin-bottom: 1rem; opacity: 0.5;"></i>
            <p>No notices found in this category.</p>
          </div>
        `;
        return;
      }

      listContainer.innerHTML = filtered.map(n => {
        const [month, day, year] = n.date.split(" ");
        const priorityBadge = n.priority === "Urgent"
          ? `<span class="badge badge-urgent"><i class="fa-solid fa-triangle-exclamation"></i> Urgent</span>`
          : n.priority === "Important"
          ? `<span class="badge badge-gold"><i class="fa-solid fa-star"></i> Important</span>`
          : `<span class="badge badge-primary"><i class="fa-solid fa-circle-info"></i> Notice</span>`;

        const newBadge = n.isNew ? `<span class="ticker-badge">NEW</span>` : "";

        return `
          <div class="notice-item">
            <div class="notice-left">
              <div class="notice-date-badge">
                <span class="day">${day.replace(",", "")}</span>
                <span class="month">${month}</span>
              </div>
              <div class="notice-content">
                <div class="notice-header-row">
                  ${newBadge}
                  ${priorityBadge}
                  <span class="badge" style="background:var(--bg-surface-secondary);">${n.category}</span>
                </div>
                <h4 class="notice-title">${n.title}</h4>
                <p class="notice-summary">${n.summary}</p>
                <div class="notice-author">
                  <i class="fa-solid fa-building-columns"></i> ${n.author} • ${n.date}
                </div>
              </div>
            </div>
            <div class="notice-action-btn">
              <button class="btn btn-secondary btn-sm download-notice-btn" data-file="${n.downloadFile}" data-title="${n.title}">
                <i class="fa-solid fa-file-pdf text-red-500"></i> Download PDF
              </button>
            </div>
          </div>
        `;
      }).join("");
    };

    render();

    if (filterTabs) {
      filterTabs.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (btn) {
          filterTabs.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          activeCat = btn.getAttribute("data-cat") || "all";
          render();
        }
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQ = e.target.value.trim();
        render();
      });
    }

    // Download modal trigger
    if (listContainer) {
      listContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".download-notice-btn");
        if (btn) {
          const fileName = btn.getAttribute("data-file");
          const title = btn.getAttribute("data-title");
          this.showDownloadModal(title, fileName);
        }
      });
    }
  },

  showDownloadModal(title, fileName) {
    const modal = document.getElementById("generalModal");
    const mTitle = document.getElementById("generalModalTitle");
    const mBody = document.getElementById("generalModalBody");

    if (modal && mTitle && mBody) {
      mTitle.innerHTML = `<i class="fa-solid fa-file-pdf" style="color:#ef4444;"></i> Official Document Circular`;
      mBody.innerHTML = `
        <div style="text-align:center; padding:1.5rem 0;">
          <div style="width:70px; height:70px; border-radius:var(--radius-full); background:rgba(239, 68, 68, 0.1); color:#ef4444; display:flex; align-items:center; justify-content:center; font-size:2rem; margin:0 auto 1.5rem auto;">
            <i class="fa-solid fa-file-lines"></i>
          </div>
          <h3 style="margin-bottom:0.5rem; font-size:1.25rem;">${title}</h3>
          <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1.5rem;">File: <strong>${fileName}</strong> (Digitally Signed by Registrar, ASPDC)</p>
          <div style="display:flex; justify-content:center; gap:1rem;">
            <button class="btn btn-primary" onclick="App.simulateDownload('${fileName}')">
              <i class="fa-solid fa-cloud-arrow-down"></i> Save PDF File
            </button>
            <button class="btn btn-secondary" onclick="App.closeAllModals()">Close</button>
          </div>
        </div>
      `;
      modal.classList.add("active");
    }
  },

  simulateDownload(fileName) {
    this.showToast(`Downloading official circular: ${fileName}`);
    setTimeout(() => {
      this.closeAllModals();
    }, 1200);
  },

  /* ------------------------------------------------------------------------
     6. 📅 EVENTS CALENDAR
     ------------------------------------------------------------------------ */
  initEventsCalendar() {
    const events = window.CollegeData?.events || [];
    const container = document.getElementById("eventsListContainer");
    const calendarDays = document.getElementById("calendarDaysGrid");
    const monthTitle = document.getElementById("calendarMonthTitle");

    // Render event cards
    if (container) {
      container.innerHTML = events.map(evt => `
        <div class="event-card" data-id="${evt.id}">
          <img src="${evt.image}" alt="${evt.title}" class="event-card-img" />
          <div class="event-card-info">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                <span class="badge badge-primary">${evt.type}</span>
                <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700;"><i class="fa-solid fa-location-dot"></i> ${evt.venue}</span>
              </div>
              <h4 class="event-card-title">${evt.title}</h4>
              <div class="event-meta-line">
                <span><i class="fa-regular fa-calendar"></i> ${evt.date}</span>
                <span><i class="fa-regular fa-clock"></i> ${evt.time}</span>
              </div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.75rem;">
              <span style="font-size:0.8rem; color:var(--success); font-weight:700;">
                <i class="fa-solid fa-ticket"></i> ${evt.seatsAvailable} spots open
              </span>
              <button class="btn btn-primary btn-sm view-event-btn" data-id="${evt.id}">
                Details & RSVP
              </button>
            </div>
          </div>
        </div>
      `).join("");

      container.addEventListener("click", (e) => {
        const btn = e.target.closest(".view-event-btn");
        if (btn) {
          const id = btn.getAttribute("data-id");
          this.openEventModal(id);
        }
      });
    }

    // Render Calendar Grid for October 2025
    if (calendarDays && monthTitle) {
      monthTitle.textContent = "October 2025";
      // Days grid with event indicators
      // Oct 2025 starts on Wednesday (offset 3)
      let html = "";
      // Empty cells before 1st
      for (let i = 0; i < 3; i++) {
        html += `<td></td>`;
      }
      for (let day = 1; day <= 31; day++) {
        const dayStr = day < 10 ? `0${day}` : `${day}`;
        const fullDate = `2025-10-${dayStr}`;
        const hasEvent = events.some(e => e.date === fullDate);
        const dayOfWeek = (day + 2) % 7;

        html += `
          <td>
            <div class="cal-day-cell ${hasEvent ? 'has-event' : ''}" data-date="${fullDate}">
              ${day}
            </div>
          </td>
        `;

        if (dayOfWeek === 6 && day !== 31) {
          html += `</tr><tr>`;
        }
      }
      calendarDays.innerHTML = `<tr>${html}</tr>`;

      calendarDays.addEventListener("click", (e) => {
        const cell = e.target.closest(".cal-day-cell");
        if (cell) {
          document.querySelectorAll(".cal-day-cell").forEach(c => c.classList.remove("selected"));
          cell.classList.add("selected");
          const date = cell.getAttribute("data-date");
          const matched = events.find(e => e.date === date);
          if (matched) {
            this.openEventModal(matched.id);
          } else {
            this.showToast(`No special events scheduled for ${date}.`);
          }
        }
      });
    }
  },

  openEventModal(eventId) {
    const evt = window.CollegeData?.events.find(e => e.id === eventId);
    if (!evt) return;

    const modal = document.getElementById("generalModal");
    const title = document.getElementById("generalModalTitle");
    const body = document.getElementById("generalModalBody");

    if (modal && title && body) {
      title.innerHTML = `<i class="fa-regular fa-calendar-check" style="color:var(--primary-light);"></i> ${evt.title}`;
      body.innerHTML = `
        <div style="margin-bottom:1.5rem;">
          <img src="${evt.image}" alt="${evt.title}" style="width:100%; height:220px; object-fit:cover; border-radius:var(--radius-lg); margin-bottom:1.25rem;" />
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:1rem;">
            <span class="badge badge-primary">${evt.type}</span>
            <span class="badge badge-gold">${evt.badge}</span>
            <span class="badge badge-success">${evt.registrationFee}</span>
          </div>
          <p style="color:var(--text-secondary); line-height:1.7; margin-bottom:1.25rem;">${evt.description}</p>
          <div style="background:var(--bg-surface-secondary); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--border-color); margin-bottom:1.5rem;">
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; font-size:0.88rem;">
              <div><strong>Date:</strong> ${evt.date}</div>
              <div><strong>Time:</strong> ${evt.time}</div>
              <div><strong>Venue:</strong> ${evt.venue}</div>
              <div><strong>Key Speakers:</strong> ${evt.speakers.join(", ")}</div>
            </div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
            <div>
              <span style="font-size:0.85rem; color:var(--text-muted); display:block;">Seats Remaining:</span>
              <span style="font-size:1.1rem; font-weight:800; color:var(--success);">${evt.seatsAvailable} Seats</span>
            </div>
            <button class="btn btn-primary" onclick="App.generateRSVPTicket('${evt.id}', '${evt.title}')">
              <i class="fa-solid fa-qrcode"></i> Register & Get Instant E-Pass
            </button>
          </div>
        </div>
      `;
      modal.classList.add("active");
    }
  },

  generateRSVPTicket(evtId, evtTitle) {
    const modal = document.getElementById("generalModal");
    const body = document.getElementById("generalModalBody");
    const passCode = "ASPDC-PASS-" + Math.floor(100000 + Math.random() * 900000);

    if (body) {
      body.innerHTML = `
        <div style="text-align:center; padding:1rem 0;">
          <div style="display:inline-flex; align-items:center; justify-content:center; width:64px; height:64px; border-radius:var(--radius-full); background:var(--success-bg); color:var(--success); font-size:1.8rem; margin-bottom:1rem;">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <h3 style="font-size:1.35rem; font-weight:800; margin-bottom:0.25rem;">Registration Confirmed!</h3>
          <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1.5rem;">Your digital entry pass has been generated.</p>

          <div style="background:linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); color:#fff; border-radius:var(--radius-lg); padding:1.5rem; text-align:left; max-width:440px; margin:0 auto 1.5rem auto; box-shadow:var(--shadow-xl); position:relative; overflow:hidden;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.15); padding-bottom:0.75rem; margin-bottom:0.75rem;">
              <span style="font-size:0.75rem; font-weight:700; letter-spacing:0.05em; color:#93c5fd;">OFFICIAL ADMIT PASS</span>
              <span style="font-size:0.75rem; color:#fcd34d;">ASPDC 2025</span>
            </div>
            <h4 style="color:#ffffff; font-size:1.15rem; margin-bottom:0.5rem;">${evtTitle}</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; font-size:0.8rem; color:#cbd5e1; margin-bottom:1rem;">
              <div>Pass ID: <strong style="color:#fff;">${passCode}</strong></div>
              <div>Attendee: <strong style="color:#fff;">Guest / Student</strong></div>
            </div>
            <div style="background:rgba(255,255,255,0.1); padding:0.6rem; border-radius:var(--radius-md); text-align:center; font-family:monospace; letter-spacing:0.15em; font-size:0.9rem;">
              ||| | |||| | ||| |||| | ||| ||
            </div>
          </div>

          <div style="display:flex; justify-content:center; gap:1rem;">
            <button class="btn btn-primary" onclick="App.showToast('Pass saved to downloads!'); App.closeAllModals();">
              <i class="fa-solid fa-download"></i> Save Ticket
            </button>
            <button class="btn btn-secondary" onclick="App.closeAllModals()">Done</button>
          </div>
        </div>
      `;
    }
  },

  /* ------------------------------------------------------------------------
     7. 👨🎓 STUDENT DASHBOARD (PORTAL)
     ------------------------------------------------------------------------ */
  initStudentDashboard() {
    const student = window.CollegeData?.studentProfile;
    if (!student) return;

    // Populate Student Meta Header
    const sName = document.getElementById("studentPortalName");
    const sRoll = document.getElementById("studentPortalRoll");
    const sProg = document.getElementById("studentPortalProgram");
    const sAvatar = document.getElementById("studentPortalAvatar");

    if (sName) sName.textContent = student.name;
    if (sRoll) sRoll.textContent = `${student.rollNumber} • ${student.semester}`;
    if (sProg) sProg.textContent = student.program;
    if (sAvatar) sAvatar.src = student.avatar;

    // Tabs switching
    const tabNav = document.getElementById("portalTabsNav");
    if (tabNav) {
      tabNav.addEventListener("click", (e) => {
        const btn = e.target.closest(".portal-nav-tab");
        if (btn) {
          const tabKey = btn.getAttribute("data-tab");
          tabNav.querySelectorAll(".portal-nav-tab").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");

          document.querySelectorAll(".portal-tab-content").forEach(c => c.classList.remove("active"));
          const activeContent = document.getElementById(`portalTab_${tabKey}`);
          if (activeContent) activeContent.classList.add("active");
        }
      });
    }

    // Attendance Tab
    const attList = document.getElementById("portalAttendanceList");
    if (attList) {
      attList.innerHTML = student.attendanceBreakdown.map(item => {
        const colorClass = item.percent >= 85 ? "green" : item.percent >= 75 ? "blue" : "orange";
        return `
          <div class="att-bar-row">
            <div class="att-bar-labels">
              <span><strong>${item.subject}</strong> (${item.code})</span>
              <span><strong>${item.percent}%</strong> (${item.attended}/${item.total} lectures)</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill ${colorClass}" style="width: ${item.percent}%;"></div>
            </div>
          </div>
        `;
      }).join("");
    }

    // Timetable Tab
    const timetableContainer = document.getElementById("portalTimetableList");
    if (timetableContainer) {
      timetableContainer.innerHTML = student.timetableToday.map(slot => `
        <div style="background:var(--bg-surface-secondary); padding:1rem 1.25rem; border-radius:var(--radius-md); border:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
          <div>
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
              <span style="font-size:0.8rem; font-weight:700; color:var(--text-muted);"><i class="fa-regular fa-clock"></i> ${slot.time}</span>
              ${slot.isOngoing ? '<span class="ticker-badge" style="background:#10b981;">CURRENT LECTURE</span>' : ''}
            </div>
            <h4 style="font-size:1.05rem; font-weight:700;">${slot.subject}</h4>
            <span style="font-size:0.82rem; color:var(--text-secondary);"><i class="fa-solid fa-chalkboard-user"></i> ${slot.professor} • <strong>${slot.room}</strong></span>
          </div>
          <div>
            ${slot.isOngoing
              ? '<span class="badge badge-success">In Session</span>'
              : slot.isCompleted
              ? '<span class="badge badge-primary">Completed</span>'
              : '<span class="badge" style="background:var(--bg-surface); border:1px solid var(--border-color);">Upcoming</span>'}
          </div>
        </div>
      `).join("");
    }

    // Assignments Tab
    const asgContainer = document.getElementById("portalAssignmentsList");
    if (asgContainer) {
      asgContainer.innerHTML = student.assignments.map(asg => {
        const statusBadge = asg.status === "Pending"
          ? `<span class="badge badge-urgent">Action Required</span>`
          : asg.status === "Submitted"
          ? `<span class="badge badge-gold">Under Review</span>`
          : `<span class="badge badge-success">${asg.grade}</span>`;

        return `
          <div style="background:var(--bg-surface-secondary); padding:1.25rem; border-radius:var(--radius-lg); border:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem; flex-wrap:wrap; gap:1rem;">
            <div style="flex:1; min-width:280px;">
              <div style="display:flex; gap:0.5rem; margin-bottom:0.4rem;">
                ${statusBadge}
                <span style="font-size:0.78rem; color:var(--text-muted); font-weight:600;">${asg.course}</span>
              </div>
              <h4 style="font-size:1.05rem; font-weight:700; margin-bottom:0.35rem;">${asg.title}</h4>
              <p style="font-size:0.85rem; color:var(--text-secondary);"><i class="fa-regular fa-calendar-xmark text-red-500"></i> Due: <strong>${asg.due}</strong> • Max Marks: ${asg.maxMarks}</p>
              ${asg.remarks ? `<p style="font-size:0.82rem; color:var(--success); margin-top:0.4rem;"><i class="fa-solid fa-comment-dots"></i> Faculty Remarks: "${asg.remarks}"</p>` : ''}
            </div>
            <div>
              ${asg.status === "Pending"
                ? `<button class="btn btn-primary btn-sm submit-asg-btn" data-id="${asg.id}" data-title="${asg.title}">
                     <i class="fa-solid fa-cloud-arrow-up"></i> Upload Solution
                   </button>`
                : `<button class="btn btn-secondary btn-sm" onclick="App.showToast('Assignment verified & logged in portal.')">
                     <i class="fa-solid fa-check"></i> View Submission
                   </button>`}
            </div>
          </div>
        `;
      }).join("");

      asgContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".submit-asg-btn");
        if (btn) {
          const id = btn.getAttribute("data-id");
          const title = btn.getAttribute("data-title");
          this.openAssignmentUploadModal(id, title);
        }
      });
    }

    // Results Tab
    const resultsContainer = document.getElementById("portalResultsList");
    if (resultsContainer) {
      resultsContainer.innerHTML = `
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1.25rem; margin-bottom:1.5rem;">
          ${student.resultsSummary.map(r => `
            <div style="background:var(--bg-surface-secondary); padding:1.25rem; border-radius:var(--radius-lg); border:1px solid var(--border-color); text-align:center;">
              <span style="font-size:0.8rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">${r.sem}</span>
              <h3 style="font-size:2rem; font-weight:900; color:var(--primary-light); margin:0.25rem 0;">${r.gpa}</h3>
              <span style="font-size:0.75rem; color:var(--success); font-weight:700;">${r.status}</span>
            </div>
          `).join("")}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-surface-secondary); padding:1.25rem; border-radius:var(--radius-lg); border:1px solid var(--border-color); flex-wrap:wrap; gap:1rem;">
          <div>
            <h4 style="font-weight:800;">Cumulative Grade Point Average (CGPA): <span style="color:var(--success); font-size:1.3rem;">${student.currentCGPA} / 10.0</span></h4>
            <p style="font-size:0.85rem; color:var(--text-muted);">Total Credits Earned: ${student.creditsEarned} of ${student.totalRequiredCredits}</p>
          </div>
          <button class="btn btn-secondary" onclick="App.showToast('Provisional Grade Card generated!')">
            <i class="fa-solid fa-file-arrow-down"></i> Download Grade Card
          </button>
        </div>
      `;
    }

    // Fee Tab
    const feeContainer = document.getElementById("portalFeeDetails");
    if (feeContainer) {
      feeContainer.innerHTML = `
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:1.5rem; margin-bottom:1.5rem;">
          <div style="background:var(--bg-surface-secondary); padding:1.25rem; border-radius:var(--radius-lg); border:1px solid var(--border-color);">
            <span style="font-size:0.8rem; color:var(--text-muted); font-weight:700;">Annual Tuition Dues</span>
            <h3 style="font-size:1.6rem; font-weight:800; margin-top:0.25rem;">${student.feeDetails.totalAnnualFee}</h3>
          </div>
          <div style="background:var(--bg-surface-secondary); padding:1.25rem; border-radius:var(--radius-lg); border:1px solid var(--border-color);">
            <span style="font-size:0.8rem; color:var(--text-muted); font-weight:700;">Paid Amount</span>
            <h3 style="font-size:1.6rem; font-weight:800; color:var(--success); margin-top:0.25rem;">${student.feeDetails.paidSoFar}</h3>
          </div>
          <div style="background:var(--bg-surface-secondary); padding:1.25rem; border-radius:var(--radius-lg); border:1px solid var(--border-color);">
            <span style="font-size:0.8rem; color:var(--text-muted); font-weight:700;">Pending Dues</span>
            <h3 style="font-size:1.6rem; font-weight:800; color:var(--primary-light); margin-top:0.25rem;">${student.feeDetails.pendingDues}</h3>
          </div>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-surface-secondary); padding:1.25rem; border-radius:var(--radius-lg); border:1px solid var(--border-color); flex-wrap:wrap; gap:1rem;">
          <div>
            <span class="badge badge-success" style="margin-bottom:0.4rem;">Status: ${student.feeDetails.status}</span>
            <p style="font-size:0.85rem; color:var(--text-secondary);">Last Payment Receipt: <strong>${student.feeDetails.receiptNo}</strong> (Paid on ${student.feeDetails.paidDate})</p>
          </div>
          <button class="btn btn-secondary" onclick="App.showToast('Official Fee Clearance Certificate generated!')">
            <i class="fa-solid fa-receipt"></i> Download Official Receipt
          </button>
        </div>
      `;
    }
  },

  openAssignmentUploadModal(id, title) {
    const modal = document.getElementById("generalModal");
    const mTitle = document.getElementById("generalModalTitle");
    const mBody = document.getElementById("generalModalBody");

    if (modal && mTitle && mBody) {
      mTitle.innerHTML = `<i class="fa-solid fa-cloud-arrow-up text-primary"></i> Upload Assignment`;
      mBody.innerHTML = `
        <div>
          <h4 style="font-size:1.15rem; margin-bottom:0.5rem;">${title}</h4>
          <p style="color:var(--text-muted); font-size:0.88rem; margin-bottom:1.5rem;">Accepted formats: PDF, ZIP, IPYNB, or GitHub repository link.</p>

          <div style="border:2px dashed var(--border-color); border-radius:var(--radius-lg); padding:2rem; text-align:center; background:var(--bg-surface-secondary); margin-bottom:1.5rem; cursor:pointer;" onclick="document.getElementById('mockFileInput').click();">
            <i class="fa-solid fa-file-arrow-up" style="font-size:2.5rem; color:var(--primary-light); margin-bottom:0.75rem;"></i>
            <h5 style="font-weight:700; margin-bottom:0.25rem;">Click to browse files or drag & drop</h5>
            <p style="font-size:0.82rem; color:var(--text-muted);">Max file size: 25 MB</p>
            <input type="file" id="mockFileInput" style="display:none;" onchange="App.handleMockFileSelected(this);" />
            <div id="mockFileChosen" style="margin-top:0.75rem; font-weight:700; color:var(--success);"></div>
          </div>

          <div style="margin-bottom:1.5rem;">
            <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:0.4rem;">Or Submission Git Repository / Cloud Link:</label>
            <input type="url" placeholder="https://github.com/aarav-sharma/assignment-transformer" style="width:100%; padding:0.65rem 1rem; background:var(--bg-surface); border:1px solid var(--border-color); border-radius:var(--radius-md);" />
          </div>

          <div style="display:flex; justify-content:flex-end; gap:0.75rem;">
            <button class="btn btn-secondary" onclick="App.closeAllModals()">Cancel</button>
            <button class="btn btn-primary" onclick="App.confirmAssignmentSubmission('${id}')">
              <i class="fa-solid fa-check"></i> Submit to Portal
            </button>
          </div>
        </div>
      `;
      modal.classList.add("active");
    }
  },

  handleMockFileSelected(input) {
    const display = document.getElementById("mockFileChosen");
    if (input.files && input.files[0] && display) {
      display.innerHTML = `<i class="fa-solid fa-circle-check"></i> File ready: ${input.files[0].name} (${(input.files[0].size/1024).toFixed(1)} KB)`;
    }
  },

  confirmAssignmentSubmission(id) {
    this.showToast("Assignment uploaded successfully! Faculty notified.");
    setTimeout(() => {
      this.closeAllModals();
    }, 1000);
  },

  /* ------------------------------------------------------------------------
     8. 🏆 ACHIEVEMENTS & 💼 PLACEMENTS
     ------------------------------------------------------------------------ */
  initAchievements() {
    const list = window.CollegeData?.achievements || [];
    const container = document.getElementById("achievementsGrid");
    const filterTabs = document.getElementById("achievementFilterTabs");

    let activeCat = "all";

    const render = () => {
      if (!container) return;
      const filtered = list.filter(item => activeCat === "all" || item.catKey === activeCat);
      container.innerHTML = filtered.map(a => `
        <div class="achievement-card">
          <div class="achievement-img-wrap">
            <img src="${a.image}" alt="${a.title}" class="achievement-img" />
            <span class="achievement-badge-pill"><i class="fa-solid fa-trophy"></i> ${a.award}</span>
          </div>
          <div class="achievement-body">
            <span class="badge badge-primary" style="margin-bottom:0.5rem;">${a.category} • ${a.year}</span>
            <h4 class="achievement-title">${a.title}</h4>
            <div class="achievement-team"><i class="fa-solid fa-user-group"></i> ${a.team}</div>
            <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.6;">${a.desc}</p>
          </div>
        </div>
      `).join("");
    };

    render();

    if (filterTabs) {
      filterTabs.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (btn) {
          filterTabs.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          activeCat = btn.getAttribute("data-cat") || "all";
          render();
        }
      });
    }

    // Populate Recruiter Marquee
    const recruiters = window.CollegeData?.placements?.recruiters || [];
    const marqueeTrack = document.getElementById("recruiterMarqueeTrack");
    if (marqueeTrack) {
      const itemsHtml = recruiters.map(r => `
        <div class="recruiter-item">
          <i class="fa-solid fa-building text-primary"></i> ${r.name}
        </div>
      `).join("");
      // Duplicate to ensure seamless continuous scroll
      marqueeTrack.innerHTML = itemsHtml + itemsHtml;
    }

    // Alumni Success Stories
    const alumni = window.CollegeData?.placements?.alumniSuccess || [];
    const alumniContainer = document.getElementById("alumniSuccessGrid");
    if (alumniContainer) {
      alumniContainer.innerHTML = alumni.map(al => `
        <div style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:var(--radius-xl); padding:1.75rem; box-shadow:var(--shadow-md); display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.25rem;">
              <img src="${al.avatar}" alt="${al.name}" style="width:54px; height:54px; border-radius:var(--radius-full); object-fit:cover; border:2px solid var(--primary-light);" />
              <div>
                <h4 style="font-size:1.1rem; font-weight:700;">${al.name}</h4>
                <p style="font-size:0.8rem; color:var(--secondary); font-weight:600;">${al.role}</p>
                <span style="font-size:0.75rem; color:var(--text-muted);">${al.location} • ${al.batch}</span>
              </div>
            </div>
            <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.65; font-style:italic;">"${al.quote}"</p>
          </div>
        </div>
      `).join("");
    }
  },

  /* ------------------------------------------------------------------------
     9. 📸 STUDENT LIFE GALLERY
     ------------------------------------------------------------------------ */
  initGallery() {
    const list = window.CollegeData?.gallery || [];
    const container = document.getElementById("galleryGrid");
    const filterTabs = document.getElementById("galleryFilterTabs");

    let activeCat = "all";

    const render = () => {
      if (!container) return;
      this.activeGalleryItems = list.filter(item => activeCat === "all" || item.category === activeCat);
      container.innerHTML = this.activeGalleryItems.map((g, idx) => `
        <div class="gallery-card" data-index="${idx}">
          <img src="${g.image}" alt="${g.title}" loading="lazy" />
          <div class="gallery-overlay">
            <h4 class="gallery-card-title">${g.title}</h4>
            <p class="gallery-card-caption">${g.caption}</p>
          </div>
        </div>
      `).join("");
    };

    render();

    if (filterTabs) {
      filterTabs.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (btn) {
          filterTabs.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          activeCat = btn.getAttribute("data-cat") || "all";
          render();
        }
      });
    }

    if (container) {
      container.addEventListener("click", (e) => {
        const card = e.target.closest(".gallery-card");
        if (card) {
          const idx = parseInt(card.getAttribute("data-index"), 10);
          this.openLightbox(idx);
        }
      });
    }

    // Lightbox Controls
    const prevBtn = document.getElementById("lightboxPrevBtn");
    const nextBtn = document.getElementById("lightboxNextBtn");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        this.activeLightboxIndex = (this.activeLightboxIndex - 1 + this.activeGalleryItems.length) % this.activeGalleryItems.length;
        this.updateLightbox();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        this.activeLightboxIndex = (this.activeLightboxIndex + 1) % this.activeGalleryItems.length;
        this.updateLightbox();
      });
    }

    // Keyboard navigation
    window.addEventListener("keydown", (e) => {
      const modal = document.getElementById("lightboxModal");
      if (modal?.classList.contains("active")) {
        if (e.key === "ArrowLeft") prevBtn?.click();
        if (e.key === "ArrowRight") nextBtn?.click();
        if (e.key === "Escape") this.closeAllModals();
      }
    });
  },

  openLightbox(index) {
    this.activeLightboxIndex = index;
    const modal = document.getElementById("lightboxModal");
    if (modal) {
      this.updateLightbox();
      modal.classList.add("active");
    }
  },

  updateLightbox() {
    const item = this.activeGalleryItems[this.activeLightboxIndex];
    if (!item) return;

    const img = document.getElementById("lightboxImage");
    const title = document.getElementById("lightboxTitle");
    const caption = document.getElementById("lightboxCaption");

    if (img) img.src = item.image;
    if (title) title.textContent = item.title;
    if (caption) caption.textContent = item.caption;
  },

  /* ------------------------------------------------------------------------
     10. 🧑🤝🧑 CLUBS & COMMUNITIES
     ------------------------------------------------------------------------ */
  initClubs() {
    const clubs = window.CollegeData?.clubs || [];
    const container = document.getElementById("clubsGrid");

    if (container) {
      container.innerHTML = clubs.map(club => `
        <div class="club-card">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div class="club-icon-avatar">
                <i class="fa-solid ${club.icon}"></i>
              </div>
              <span class="badge badge-primary">${club.category}</span>
            </div>
            <h3 class="club-name">${club.name}</h3>
            <p class="club-desc">${club.description}</p>
            <div class="club-event-highlight">
              <strong style="color:var(--text-primary); display:block; margin-bottom:0.2rem;"><i class="fa-regular fa-calendar-check text-secondary"></i> Upcoming:</strong>
              ${club.upcomingEvent}
            </div>
            <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:1.5rem;">
              ${club.tags.map(t => `<span class="meta-chip">#${t}</span>`).join("")}
            </div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:1.25rem;">
            <span style="font-size:0.8rem; color:var(--text-muted); font-weight:600;"><i class="fa-solid fa-users"></i> ${club.members}</span>
            <button class="btn btn-secondary btn-sm join-club-btn" data-id="${club.id}" data-name="${club.name}">
              <i class="fa-solid fa-user-plus"></i> Join Society
            </button>
          </div>
        </div>
      `).join("");

      container.addEventListener("click", (e) => {
        const btn = e.target.closest(".join-club-btn");
        if (btn) {
          const name = btn.getAttribute("data-name");
          this.openClubJoinModal(name);
        }
      });
    }
  },

  openClubJoinModal(clubName) {
    const modal = document.getElementById("generalModal");
    const mTitle = document.getElementById("generalModalTitle");
    const mBody = document.getElementById("generalModalBody");

    if (modal && mTitle && mBody) {
      mTitle.innerHTML = `<i class="fa-solid fa-users text-secondary"></i> Apply to Join: ${clubName}`;
      mBody.innerHTML = `
        <form onsubmit="event.preventDefault(); App.showToast('Application submitted to Club President!'); App.closeAllModals();">
          <p style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:1.25rem;">Submit your profile to join weekly workshops, project groups, and hackathon delegations.</p>
          <div style="margin-bottom:1rem;">
            <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:0.35rem;">Full Name</label>
            <input type="text" value="Aarav Sharma" required style="width:100%; padding:0.65rem; background:var(--bg-surface-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md);" />
          </div>
          <div style="margin-bottom:1rem;">
            <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:0.35rem;">Student Roll / ID</label>
            <input type="text" value="ASPDC-2023-CS-042" required style="width:100%; padding:0.65rem; background:var(--bg-surface-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md);" />
          </div>
          <div style="margin-bottom:1.5rem;">
            <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:0.35rem;">Why do you wish to join & key skills?</label>
            <textarea rows="3" placeholder="Briefly describe your enthusiasm, prior projects, or skills..." style="width:100%; padding:0.65rem; background:var(--bg-surface-secondary); border:1px solid var(--border-color); border-radius:var(--radius-md);"></textarea>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:0.75rem;">
            <button type="button" class="btn btn-secondary" onclick="App.closeAllModals()">Cancel</button>
            <button type="submit" class="btn btn-primary"><i class="fa-solid fa-check"></i> Submit Membership Form</button>
          </div>
        </form>
      `;
      modal.classList.add("active");
    }
  },

  /* ------------------------------------------------------------------------
     11. ADMISSIONS FORM & SCHOLARSHIP CALCULATOR
     ------------------------------------------------------------------------ */
  openAdmissionForm(selectedCourse = "") {
    const modal = document.getElementById("generalModal");
    const mTitle = document.getElementById("generalModalTitle");
    const mBody = document.getElementById("generalModalBody");

    if (modal && mTitle && mBody) {
      mTitle.innerHTML = `<i class="fa-solid fa-graduation-cap" style="color:var(--kesar);"></i> Admissions 2025-26 (DTE / ACPC Code: 042)`;
      mBody.innerHTML = `
        <form onsubmit="event.preventDefault(); App.submitAdmissionApplication();">
          <p style="color:var(--text-secondary); font-size:0.88rem; margin-bottom:1.25rem;">
            Online Registration for B.Tech, Direct 2nd Year Lateral Entry (D2D), Polytechnic Diploma, MBA & MCA. State Quota & All India Merit seats available.
          </p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1rem;">
            <div>
              <label style="display:block; font-size:0.82rem; font-weight:700; margin-bottom:0.35rem;">Candidate Full Name *</label>
              <input type="text" placeholder="e.g. Aarav Sharma" required style="width:100%; padding:0.65rem; background:var(--bg-surface-secondary); border:1.5px solid var(--border-color); border-radius:var(--radius-sm);" />
            </div>
            <div>
              <label style="display:block; font-size:0.82rem; font-weight:700; margin-bottom:0.35rem;">Mobile Number (+91) *</label>
              <input type="tel" placeholder="+91 98765 43210" required style="width:100%; padding:0.65rem; background:var(--bg-surface-secondary); border:1.5px solid var(--border-color); border-radius:var(--radius-sm);" />
            </div>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1rem;">
            <div>
              <label style="display:block; font-size:0.82rem; font-weight:700; margin-bottom:0.35rem;">Email Address *</label>
              <input type="email" placeholder="applicant@gmail.com" required style="width:100%; padding:0.65rem; background:var(--bg-surface-secondary); border:1.5px solid var(--border-color); border-radius:var(--radius-sm);" />
            </div>
            <div>
              <label style="display:block; font-size:0.82rem; font-weight:700; margin-bottom:0.35rem;">Desired Program *</label>
              <select required style="width:100%; padding:0.65rem; background:var(--bg-surface-secondary); border:1.5px solid var(--border-color); border-radius:var(--radius-sm);">
                <option value="">-- Select Degree / Diploma --</option>
                <option ${selectedCourse.includes("AI") ? 'selected' : ''}>B.Tech AI & Machine Learning (4 Years)</option>
                <option ${selectedCourse.includes("Computer") ? 'selected' : ''}>B.Tech Computer Science & Eng. (4 Years)</option>
                <option>B.Tech Direct 2nd Year Lateral Entry (D2D - 3 Years)</option>
                <option ${selectedCourse.includes("Robotics") ? 'selected' : ''}>B.Tech Robotics & Smart Automation</option>
                <option ${selectedCourse.includes("MBA") ? 'selected' : ''}>MBA in Business Analytics & Fintech</option>
                <option ${selectedCourse.includes("MCA") ? 'selected' : ''}>MCA in Cloud & Cybersecurity</option>
                <option ${selectedCourse.includes("Diploma") ? 'selected' : ''}>Polytechnic Diploma in Computer / Mechanical</option>
              </select>
            </div>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1rem;">
            <div>
              <label style="display:block; font-size:0.82rem; font-weight:700; margin-bottom:0.35rem;">Category</label>
              <select style="width:100%; padding:0.65rem; background:var(--bg-surface-secondary); border:1.5px solid var(--border-color); border-radius:var(--radius-sm);">
                <option>General / Open</option>
                <option>OBC-NCL</option>
                <option>Scheduled Caste (SC)</option>
                <option>Scheduled Tribe (ST)</option>
                <option>EWS (Economically Weaker Section)</option>
              </select>
            </div>
            <div>
              <label style="display:block; font-size:0.82rem; font-weight:700; margin-bottom:0.35rem;">Admission Route</label>
              <select style="width:100%; padding:0.65rem; background:var(--bg-surface-secondary); border:1.5px solid var(--border-color); border-radius:var(--radius-sm);">
                <option>State CET Counseling (ACPC / DTE Code: 042)</option>
                <option>JEE Main All-India Quota</option>
                <option>Direct 2nd Year D2D (Diploma to Degree)</option>
                <option>Institutional Merit Quota</option>
              </select>
            </div>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1.5rem;">
            <div>
              <label style="display:block; font-size:0.82rem; font-weight:700; margin-bottom:0.35rem;">10+2 / Polytechnic Diploma %</label>
              <input type="number" min="40" max="100" placeholder="e.g. 88.5" style="width:100%; padding:0.65rem; background:var(--bg-surface-secondary); border:1.5px solid var(--border-color); border-radius:var(--radius-sm);" />
            </div>
            <div>
              <label style="display:block; font-size:0.82rem; font-weight:700; margin-bottom:0.35rem;">JEE Main / State CET Rank</label>
              <input type="text" placeholder="e.g. State Rank #4120" style="width:100%; padding:0.65rem; background:var(--bg-surface-secondary); border:1.5px solid var(--border-color); border-radius:var(--radius-sm);" />
            </div>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:0.75rem;">
            <button type="button" class="btn btn-secondary" onclick="App.closeAllModals()">Cancel</button>
            <button type="submit" class="btn btn-kesar"><i class="fa-solid fa-paper-plane"></i> Submit Application</button>
          </div>
        </form>
      `;
      modal.classList.add("active");
    }
  },

  submitAdmissionApplication() {
    const appId = "ASPDC-2025-APP-" + Math.floor(1000 + Math.random() * 9000);
    const body = document.getElementById("generalModalBody");
    if (body) {
      body.innerHTML = `
        <div style="text-align:center; padding:1.5rem 0;">
          <div style="width:64px; height:64px; border-radius:50%; background:var(--success-bg); color:var(--success); display:flex; align-items:center; justify-content:center; font-size:2rem; margin:0 auto 1rem auto; border:2px solid var(--success);">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <h3 style="font-size:1.35rem; font-weight:900; margin-bottom:0.4rem; color:var(--primary);">Application Successfully Registered!</h3>
          <p style="color:var(--text-secondary); font-size:0.92rem; margin-bottom:1.25rem;">
            Your Provisional Admission Application ID: <strong style="color:var(--kesar); font-size:1.1rem;">${appId}</strong>
          </p>
          <div style="background:var(--bg-surface-secondary); border:1.5px solid var(--border-color); border-radius:var(--radius-md); padding:1rem; text-align:left; max-width:480px; margin:0 auto 1.5rem auto; font-size:0.85rem;">
            <p style="color:var(--text-primary); margin-bottom:0.4rem;"><strong>Next Steps:</strong></p>
            <p style="color:var(--text-secondary); margin-bottom:0.3rem;">1. An SMS & email with document verification schedule has been dispatched.</p>
            <p style="color:var(--text-secondary); margin-bottom:0.3rem;">2. Bring original 10th/12th marksheets, Domicile & Caste/Category certificates for scrutiny.</p>
            <p style="color:var(--text-secondary);">3. DTE / ACPC Choice filling assistance is available at the campus counseling desk.</p>
          </div>
          <button class="btn btn-primary" onclick="App.closeAllModals()">Done / धन्यवाद</button>
        </div>
      `;
    }
  },

  initScholarshipCalculator() {
    const calcBtn = document.getElementById("calculateScholarshipBtn");
    if (!calcBtn) return;

    calcBtn.addEventListener("click", () => {
      const scoreInput = document.getElementById("calcPercentileInput");
      const resultBox = document.getElementById("calcResultBox");
      const val = parseFloat(scoreInput?.value || 0);

      if (!val || val < 0 || val > 100) {
        this.showToast("Please enter a valid score or percentile (40 - 100).");
        return;
      }

      let waiver = "0%";
      let category = "Standard Tuition Fee";
      let details = "";

      if (val >= 95) {
        waiver = "100% Full Tuition Fee Waiver";
        category = "Chairman's Presidential Merit Scholar";
        details = "Covered under Chairman's Merit Pool (100% Tuition Fee Exemption for all 4 years upon maintaining 8.5+ CGPA).";
      } else if (val >= 90) {
        waiver = "75% Tuition Fee Waiver";
        category = "Dean's Academic Excellence Award";
        details = "75% waiver on annual tuition fees + priority access to research labs.";
      } else if (val >= 80) {
        waiver = "50% Tuition Fee Waiver";
        category = "State Merit Honor Scholarship";
        details = "50% waiver on tuition fees + eligibility for AICTE Pragati / Saksham schemes.";
      } else if (val >= 70) {
        waiver = "25% Tuition Fee Waiver";
        category = "Vidyasagar Merit Incentive Grant";
        details = "25% tuition waiver + National Scholarship Portal (NSP) Post-Matric scheme assistance.";
      } else {
        waiver = "15% Special Institutional Assistance";
        category = "ASPDC Foundation Grant";
        details = "Eligible for State Government SC/ST/OBC Freeship & fee reimbursement.";
      }

      if (resultBox) {
        resultBox.style.display = "block";
        resultBox.innerHTML = `
          <div style="background:var(--success-bg); border:1.5px solid var(--success); border-radius:var(--radius-md); padding:1.25rem; text-align:center;">
            <span style="font-size:0.75rem; font-weight:800; color:var(--success); text-transform:uppercase;">Eligible Scholarship Status:</span>
            <h3 style="font-size:1.55rem; font-weight:900; color:var(--success); margin:0.3rem 0;">${waiver}</h3>
            <p style="font-size:0.86rem; color:var(--text-primary); font-weight:700; margin-bottom:0.3rem;">${category}</p>
            <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:1rem;">${details}</p>
            <button class="btn btn-primary btn-sm" onclick="App.openAdmissionForm()">
              Lock in Scholarship & Apply
            </button>
          </div>
        `;
      }
    });
  },

  /* ------------------------------------------------------------------------
     12. GENERAL MODALS & TOASTS
     ------------------------------------------------------------------------ */
  initModals() {
    document.querySelectorAll(".modal-overlay").forEach(modal => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.closest(".modal-close-btn")) {
          modal.classList.remove("active");
        }
      });
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeAllModals();
      }
    });
  },

  closeAllModals() {
    document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
  },

  showToast(message) {
    const existing = document.getElementById("aspdcToast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.id = "aspdcToast";
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: var(--bg-surface-elevated);
      color: var(--text-primary);
      padding: 0.85rem 1.6rem;
      border-radius: var(--radius-full);
      box-shadow: var(--shadow-xl);
      border: 1px solid var(--border-color);
      font-size: 0.9rem;
      font-weight: 600;
      z-index: 3000;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      opacity: 0;
      transition: all 0.3s ease;
    `;
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--success);"></i> ${message}`;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.opacity = "1";
      toast.style.transform = "translateX(-50%) translateY(0)";
    });

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) translateY(20px)";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
};

window.App = App;
