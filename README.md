# HelpingHands

donate.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donation</title>
    <link rel="stylesheet" href="donate.css">
</head>

<body>
    <div class="donation">
        <!-- Navbar -->
        <header>
            <div id="navbar-placeholder"></div>
            <script>
                fetch('navbar.html')
                    .then(response => response.text())
                    .then(data => document.getElementById('navbar-placeholder').innerHTML = data);
            </script>
        </header>

        <!-- Hero Section -->
        <section class="header">
            <div class="header-text">
                <h1>Making a Donation for Our Children</h1>
                <p>Your support provides effective care for children in need—an investment in the leaders of tomorrow.
                </p>
            </div>
        </section>

        <!-- How Donations Help -->
        <section class="donation-info">
            <h2>How We Use Your Donation</h2>
            <p>Your contributions provide education, food, and healthcare for underprivileged children.</p>
        </section>

        <!-- Donation Form -->
        <section class="donation-form">
            <h2>Donate Now</h2>
            <form id="donationForm">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required>

                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>

                <label for="amount">Donation Amount (₹)</label>
                <input type="number" id="amount" name="amount" placeholder="Minimum ₹100" required>

                <label for="payment-method">Select Payment Method</label>
                <select id="payment-method" name="payment-method" required>
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                    <option value="upi">UPI</option>
                </select>

                <!-- Card Payment Details -->
                <div id="card-details" class="payment-method-details">
                    <label for="card-number">Card Number</label>
                    <input type="text" id="card-number" name="card-number" placeholder="Enter 16-digit card number">

                    <label for="expiry">Expiry Date</label>
                    <input type="month" id="expiry" name="expiry">

                    <label for="cvv">CVV</label>
                    <input type="password" id="cvv" name="cvv" placeholder="3 or 4-digit CVV">
                </div>

                <!-- UPI Payment Details -->
                <div id="upi-details" class="payment-method-details hidden">
                    <label for="upi-id">UPI ID</label>
                    <input type="text" id="upi-id" name="upi-id" placeholder="e.g., yourname@upi">
                </div>

                <button type="submit" class="donate-button">Donate Now</button>
            </form>
        </section>

        <!-- Footer -->
        <footer>
            <div id="footer-placeholder"></div>
            <script>
                fetch('footer.html')
                    .then(response => response.text())
                    .then(data => document.getElementById('footer-placeholder').innerHTML = data);
            </script>
        </footer>
    </div>

    <!-- JavaScript -->
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const paymentMethod = document.getElementById("payment-method");
            const cardDetails = document.getElementById("card-details");
            const upiDetails = document.getElementById("upi-details");

            // Show relevant payment fields
            paymentMethod.addEventListener("change", function () {
                if (this.value === "credit" || this.value === "debit") {
                    cardDetails.classList.remove("hidden");
                    upiDetails.classList.add("hidden");
                } else {
                    cardDetails.classList.add("hidden");
                    upiDetails.classList.remove("hidden");
                }
            });

            // Form Validation
            document.getElementById("donationForm").addEventListener("submit", function (event) {
                event.preventDefault();

                // Validate donation amount
                const amount = parseInt(document.getElementById("amount").value);
                if (isNaN(amount) || amount < 100) {
                    alert("Donation amount must be at least ₹100.");
                    return;
                }

                // Validate card details if required
                if (paymentMethod.value === "credit" || paymentMethod.value === "debit") {
                    const cardNumber = document.getElementById("card-number").value;
                    const expiry = document.getElementById("expiry").value;
                    const cvv = document.getElementById("cvv").value;

                    if (!/^\d{16}$/.test(cardNumber)) {
                        alert("Enter a valid 16-digit card number.");
                        return;
                    }
                    if (expiry === "" || new Date(expiry) < new Date()) {
                        alert("Enter a valid future expiry date.");
                        return;
                    }
                    if (!/^\d{3,4}$/.test(cvv)) {
                        alert("Enter a valid 3 or 4-digit CVV.");
                        return;
                    }
                }

                // Show Success Popup
                document.getElementById("donation-popup").classList.remove("hidden");
            });
        });

        // Close Popup
        function closePopup() {
            document.getElementById("donation-popup").classList.add("hidden");
        }
    </script>

    <!-- Confirmation Popup -->
    <div id="donation-popup" class="popup hidden">
        <div class="popup-content">
            <h2>Donation Successful! 🎉</h2>
            <p>Thank you for your generous donation. Your support helps make a difference!</p>
            <button onclick="closePopup()">OK</button>
        </div>
    </div>

</body>

</html>


donate.css
/* 🌍 Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

/* 🌟 Ensure body takes full screen but doesn't overlap navbar */
body {
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
    color: #1D2130;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* ✅ Navbar Placeholder Fix */
header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}

/* ✅ Ensure content starts below navbar */
.donation {
    margin-top: 100px;
    /* Adjust based on navbar height */
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* 📌 Header Section */
.header {
    text-align: center;
    padding: 60px 20px;
    background: linear-gradient(135deg, #F2C94C, #FCEDC6);
    color: #1D2130;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    width: 100%;
}

.header h1 {
    font-size: 42px;
    font-weight: 700;
}

.header p {
    font-size: 18px;
    margin-top: 10px;
    opacity: 0.8;
}

/* 📌 Donation Info */
.donation-info {
    text-align: center;
    padding: 40px 20px;
    background: white;
    margin: 40px auto;
    max-width: 800px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.donation-info h2 {
    font-size: 28px;
    font-weight: 700;
    color: #03225C;
}

.donation-info p {
    font-size: 16px;
    color: #555;
    line-height: 1.6;
}

/* 📌 Donation Form */
.donation-form {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(15px);
    border-radius: 15px;
    padding: 40px;
    width: 100%;
    max-width: 600px;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    margin: 40px auto;
}

.donation-form h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
}

/* 📌 Input Fields */
input,
select {
    width: 100%;
    padding: 12px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 8px;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    color: #1D2130;
    transition: all 0.3s ease-in-out;
}

input::placeholder {
    color: rgba(29, 33, 48, 0.6);
}

input:focus,
select:focus {
    outline: none;
    border-color: #F2C94C;
    box-shadow: 0 0 8px rgba(242, 201, 76, 0.5);
}

/* 📌 Payment Fields */
.payment-method-details .hidden {
    display: none;
}

.payment-method-details.active .hidden {
    display: block;
}

/* 📌 Donate Button */
.donate-button {
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, #F2C94C, #FFB547);
    transition: all 0.3s ease-in-out;
}

.donate-button:hover {
    background: linear-gradient(135deg, #F2C94C, #FF9E44);
    transform: translateY(-2px);
}

.donate-button:active {
    transform: scale(0.98);
}

/* 📌 Ensure Footer Fits Perfectly */
footer {
    width: 100%;
    text-align: center;
    padding: 20px;
    background: #1D2130;
    color: white;
    margin-top: auto;
    position: relative;
}

/* 📱 Responsive Design */
@media (max-width: 768px) {
    .donation {
        margin-top: 80px;
        /* Adjust for smaller navbar */
    }

    .donation-form {
        padding: 30px;
        width: 90%;
    }

    .header h1 {
        font-size: 32px;
    }

    .header p,
    .donation-info p {
        font-size: 14px;
    }
}

/* Donation Success Popup */
.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    z-index: 1000;
    display: none;
}

.popup-content h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.popup-content p {
    font-size: 16px;
    color: #555;
}

.popup button {
    margin-top: 15px;
    padding: 10px 20px;
    border: none;
    background: #F2C94C;
    color: white;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;
}

.popup button:hover {
    background: #FF9E44;
}

/* Hide by default */
.hidden {
    display: none;
}

index2.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NGO Donation System</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="homepage.css">
</head>

<body>

    <!-- ✅ Navbar -->
    <header>
        <div id="navbar-placeholder"></div>
        <script>
            fetch('nav2.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('navbar-placeholder').innerHTML = data;
                    updateNavbar();
                });
        </script>
    </header>

    <!-- ✅ Main Content -->
    <!-- ✅ Hero Carousel Section -->
    <section id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://media.istockphoto.com/id/1353332258/photo/donation-concept-the-volunteer-giving-a-donate-box-to-the-recipient-standing-against-the-wall.jpg?s=612x612&w=0&k=20&c=9AL8Uj9TTtrbHpM78kMp9fqjT_8EqpEekjdixeKUzDw="
                    class="d-block w-100" alt="Donation">
            </div>
            <div class="carousel-item">
                <img src="https://cdn.pixabay.com/photo/2021/04/09/11/01/donation-6164135_1280.png"
                    class="d-block w-100" alt="Helping Hands">
            </div>
            <div class="carousel-item">
                <img src="https://img.freepik.com/free-vector/online-charity-donation-with-smartphone_24877-54474.jpg"
                    class="d-block w-100" alt="Online Donations">
            </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </section>

    <!-- ✅ About Section -->
    <section class="container my-5">
        <div class="row align-items-center">
            <div class="col-md-6">
                <h2>About Our Mission</h2>
                <p>We aim to make a difference by providing essential resources such as food, shelter, and education
                    to those in need. Join us in our journey to bring positive change to the world.</p>
            </div>
            <div class="col-md-6 text-center">
                <img src="https://img.freepik.com/free-vector/online-charity-donation-with-smartphone_24877-54474.jpg"
                    alt="About Us" class="img-fluid rounded shadow">
            </div>
        </div>
    </section>

    <!-- ✅ Support Our Cause Section -->
    <section class="text-center bg-light py-5">
        <h2>Support Our Cause</h2>
        <p>Your donations help us provide food, shelter, and education to those in need. Together, we can make a
            difference!</p>
    </section>

    <!-- ✅ Featured Programs Section -->
    <section class="container my-5">
        <div class="row g-4">
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <img src="https://img.freepik.com/free-vector/online-charity-donation-with-smartphone_24877-54474.jpg"
                        class="card-img-top" alt="Donation Program">
                    <div class="card-body">
                        <h5 class="card-title">Education for All</h5>
                        <p class="card-text">Your support provides underprivileged children with access to quality
                            education.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <img src="https://img.freepik.com/free-vector/online-charity-donation-with-smartphone_24877-54474.jpg"
                        class="card-img-top" alt="Medical Aid">
                    <div class="card-body">
                        <h5 class="card-title">Medical Aid</h5>
                        <p class="card-text">Providing healthcare services and emergency medical aid to those in
                            need.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <img src="https://img.freepik.com/free-vector/online-charity-donation-with-smartphone_24877-54474.jpg"
                        class="card-img-top" alt="Food Program">
                    <div class="card-body">
                        <h5 class="card-title">Food Distribution</h5>
                        <p class="card-text">Helping families combat hunger with nutritious meals and food packages.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ✅ Donation Statistics Section -->
    <section class="container my-5">
        <div class="row align-items-center">
            <div class="col-md-6">
                <h2>Donation Statistics</h2>
                <p>Your contributions are making an impact. Here's how the funds are allocated to various causes:</p>
            </div>
            <div class="col-md-6 text-center">
                <canvas id="donationChart"></canvas>
            </div>
        </div>
    </section>

    <!-- ✅ Events Section -->
    <section class="container text-center my-5">
        <h2>Upcoming Events</h2>
        <div class="row g-4">
            <div class="col-md-6">
                <div class="card p-3 shadow-sm">
                    <h5>Community Outreach Program</h5>
                    <p>Join us in spreading hope and resources to those in need.</p>
                    <a href="aboutus.html" class="btn btn-primary">Learn More</a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card p-3 shadow-sm">
                    <h5>Fundraising Marathon</h5>
                    <p>Be a part of our charity run to support essential community services.</p>
                    <a href="donate.html" class="btn btn-primary">Register Now</a>
                </div>
            </div>
        </div>
    </section>

    <!-- ✅ User Update Details Modal -->
    <div class="modal fade" id="updateDetailsModal" tabindex="-1" aria-labelledby="updateDetailsLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="updateDetailsLabel">Update Your Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="update-form">
                        <label for="fullName">Full Name</label>
                        <input type="text" id="fullName" class="form-control" required>

                        <label for="contactNumber" class="mt-2">Contact Number</label>
                        <input type="tel" id="contactNumber" class="form-control" required>

                        <label for="gender" class="mt-2">Gender</label>
                        <select id="gender" class="form-control">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>

                        <label for="dob" class="mt-2">Date of Birth</label>
                        <input type="date" id="dob" class="form-control" required>

                        <label for="address" class="mt-2">Address</label>
                        <textarea id="address" class="form-control" rows="3" required></textarea>

                        <button type="submit" class="btn btn-primary mt-3">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- ✅ Footer -->
    <footer class="bg-dark text-white text-center py-3">
        <div id="footer-placeholder"></div>
        <script>
            fetch('footer.html')
                .then(response => response.text())
                .then(data => document.getElementById('footer-placeholder').innerHTML = data);
        </script>
    </footer>

    <!-- ✅ JavaScript for Navbar & Modal -->
    <script>
        function updateNavbar() {
            const userLoggedIn = sessionStorage.getItem('loggedInUser');

            fetch('nav2.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('navbar-placeholder').innerHTML = data;

                    if (userLoggedIn) {
                        document.getElementById("login-section").innerHTML = `
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                    <i class="bi bi-person-circle"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#updateDetailsModal">Update Details</button></li>
                                    <li><button class="dropdown-item" onclick="logout()">Logout</button></li>
                                </ul>
                            </div>
                        `;
                    }
                });
        }

        function logout() {
            sessionStorage.removeItem('loggedInUser');
            alert("You have been logged out.");
            window.location.href = 'index.html';
        }

        document.getElementById("update-form").addEventListener("submit", function (event) {
            event.preventDefault();

            // Store updated user details in sessionStorage
            const userDetails = {
                fullName: document.getElementById("fullName").value,
                contactNumber: document.getElementById("contactNumber").value,
                gender: document.getElementById("gender").value,
                dob: document.getElementById("dob").value,
                address: document.getElementById("address").value
            };

            sessionStorage.setItem("userDetails", JSON.stringify(userDetails));

            alert("Your details have been updated successfully!");
            document.querySelector(".btn-close").click(); // Close modal
        });

    </script>

    <!-- Bootstrap Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</body>

</html>

nav2.html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Helping Hands - Navbar</title>
    <link rel="stylesheet" href="navbar.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
</head>

<body>

    <!-- Navbar Container -->
    <div class="navbar-container">
        <header class="navbar">
            <!-- Logo Section -->
            <div class="navbar-logo">
                <span class="largerthan">Helping Hands</span>
                <span class="logo-i">🙏</span>
            </div>

            <!-- Navigation Links -->
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="aboutus.html">About Us</a></li>
                <li><a href="eventreadmore.html">What We Do</a></li>
                <li><a href="contactus.html">Contact</a></li>
            </ul>

            <!-- Login/User Section -->
            <div class="nav-buttons" id="login-section">
                <button class="login-button" onclick="window.location.href='login.html'">Login</button>
            </div>
        </header>
    </div>

    <!-- ✅ JavaScript for Navbar -->
    <script>
        function updateNavbar() {
            const userLoggedIn = sessionStorage.getItem('loggedInUser');

            if (1) {
                document.getElementById("login-section").innerHTML = `
                    <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            <i class="bi bi-person-circle"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#updateDetailsModal">Update Profile</button></li>
                            <li><button class="dropdown-item" onclick="logout()">Logout</button></li>
                        </ul>
                    </div>
                `;
            }
        }

        function logout() {
            sessionStorage.removeItem('loggedInUser');
            alert("You have been logged out.");
            window.location.href = 'index.html';
        }

        // Update navbar after loading
        document.addEventListener("DOMContentLoaded", updateNavbar);
    </script>

    <!-- Bootstrap Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</body>

</html>
