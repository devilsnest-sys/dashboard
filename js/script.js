$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
});
function checkScreenSize() {
    var wrapperElement = $('#wrapper');
    if ($(window).width() < 1024) {
        wrapperElement.removeClass('active');
    } else {
        wrapperElement.addClass('active');
    }
}

// Initial check on page load
checkScreenSize();

// Event listener to check whenever the screen is resized
$(window).resize(function() {
    checkScreenSize();
});


$(document).ready(function () {
    $(".on-act").on("click", function () {
      $("li").removeClass("active-in");
      $(this).parent().addClass("active-in");
    });
  });

document.addEventListener('DOMContentLoaded', function () {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Yearly Amount',
        data: [1000, 800, 1200, 900, 1500, 1800, 1400, 2000, 1700, 1300, 1600, 1900],
        backgroundColor: 'rgb(26 156 237)', 
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        borderRadius: 8
      }]
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Month'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Yearly Amount'
          }
        }
      }
    };
  
    const ctx = document.getElementById('barChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  });



  