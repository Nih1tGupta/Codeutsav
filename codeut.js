  
        function showResults() {
            const input = document.getElementById("searchInput");
            const dropdown = document.getElementById("Dropdown");

            dropdown.innerHTML = "";
            const results = ["IIT Madras", "IIT Delhi", "IIT Bombay", "IIT Kanpur", "IIT Kharagpur", "IIT Roorkee", "IIT Guwahati", "NIT Trichy", "IIT Hyderabad", "NIT Surathkal", "Jadavpur University, Kolkata", "VIT Vellore", "IIT BHU", "IIT Dhanbad", "NIT Rourkela", "IIT Indore", "Anna University, Chennai", "ICT Mumbai", "Amrita Vishwa Vidyapeetham, Coimbatore", "IIT Mandi", "NIT Warangal", "IIT Ropar", "IIT Gandhinagar", "SRM University Chennai", "Amity University, Noida", "JMI New Delhi", "Siksha 'O' Anusandhan, Bhubaneswar", "Thapar University", "BITS Pilani", "IIT Jodhpur", "NIT Calicut", "VNIT Nagpur", "IIT Patna", "NIT Durgapur", "DTU Delhi", "IIT Bhubaneswar", "AMU Aligarh", "NIT Silchar", "Kalasalingam Academy of Research and Education, Virudhunagar", "IIEST Shibpur", "SASTRA University Thanjavur", "KIIT University", "IIST Thiruvananthapuram", "KL University Guntur", "Chandigarh University, Chandigarh", "MNIT Jaipur", "MNNIT Allahabad", "SSN College of Engineering", "Visvesvaraya Technological University, Belagavi", "NIT Kurukshetra", "LPU Jalandhar", "NIT Jalandhar", "Birla Institute of Technology, Mesra (BIT Mesra)", "Sathyabama University", "MIT Manipal", "IIT Tirupati", "PSG Tech Coimbatore", "SVNIT Surat", "Banasthali Vidyapith, Banasthali", "NIT Meghalaya", "UPES Dehradun", "IIIT Hyderabad", "NIT Patna", "Graphic Era University, Dehradun", "NIT Raipur", "NIT Srinagar", "MSRIT Bangalore", "IIT Palakkad", "IIIT Delhi", "MANIT Bhopal", "DIAT Pune", "COEP Pune", "SKCET Coimbatore", "GGSIPU Delhi", "Manipal University, Jaipur", "JNTUH University", "Andhra University College of Engineering, Visakhapatnam", "IIITM Gwalior", "NSUT Delhi", "NIT Agartala", "IIIT Bangalore", "IIITDM Jabalpur", "BMSCE Bangalore", "Vel Tech Chennai", "TCE Madurai", "National Institute of Food Technology, Entrepreneurship and Management, Thanjavur", "PEC Chandigarh", "NIT Goa", "RVCE Bangalore", "NIT Jamshedpur", "SR University, Warangal", "Panjab University, Chandigarh", "IIIT Allahabad", "JIIT Noida", "Rajalakshmi Engineering College, Chennai", "The NorthCap University, Gurgaon", "SIT Tumkur", "CV Raman Global University, Bhubaneswar", "Vignan's Foundation for Science Technology and Research, Guntur", "PES University, Bangalore", "SMVDU Katra", "BSAU Chennai", "GITAM Bhubaneswar", "CIT Coimbatore", "MRIIRS Faridabad", "Pandit Deendayal Energy University, Gandhinagar", "Karunya University", "Kumaraguru College of Technology, Coimbatore", "NIT Manipur", "College of Engineering, Trivandrum", "VSSUT Sambalpur", "IIIT Guwahati", "VNR VJIET Hyderabad", "Amity University Gurgaon", "Jain University, Bangalore", "MIT-WPU Pune", "University College of Engineering, Osmania University, Hyderabad", "KEC Erode", "VJTI Mumbai", "DEI Agra", "NHCE Bangalore", "Sri Krishna College of Technology, Coimbatore", "Tezpur University, Tezpur", "PSGITECH Coimbatore", "Nirma University, Ahmedabad", "Shoolini University Solan", "NIFTEM Sonepat", "NIT Hamirpur", "JNTUK Kakinada", "Mepco Schlenk Engineering College, Sivakasi", "BVUCOE Pune", "NIT Uttarakhand", "Amity University, Jaipur", "DAIICT Gandhinagar", "NMIMS Mumbai", "NIT Puducherry", "PESCE Mandya", "JUIT Solan", "CEC Landran", "Anurag University, Hyderabad", "VRSEC Vijayawada", "VIT Pune", "YMCA Faridabad", "Chitkara University Chandigarh", "NIET Greater Noida", "RCOEM Nagpur", "Galgotias University, Greater Noida", "GRIET Hyderabad", "MSU Baroda", "NIFFT Ranchi", "PEC Puducherry", "HITS Chennai", "Amity University, Gwalior", "Mahindra University, Hyderabad", "RMK Engineering College, Thiruvallur", "SIMATS Chennai", "Sri Sai Ram Engineering College, Chennai", "JSS Science and Technology University, Mysuru", "Vels University Chennai", "GCT Coimbatore", "Silicon Institute of Technology, Bhubaneswar", "Vardhaman College of Engineering, Hyderabad", "GHRCE Nagpur", "Sharda University, Greater Noida", "Sree Vidyanikethan Engineering College, Tirupati (SVEC Tirupati)", "CBIT Hyderabad", "Rabindranath Tagore University, Raisen", "SPIT Mumbai", "NEC Kovilpatti", "CVR College of Engineering, Hyderabad", "NIT Arunachal Pradesh", "AIT Pune", "NIT Sikkim", "Sona College of Technology, Salem", "CIT Chennai", "NMAM Institute of Technology, Karkala Taluk", "IGDTUW Delhi", "SLIET Longowal", "DIT University, Dehradun", "CMRIT Bangalore", "Easwari Engineering College, Chennai", "RGIPT Amethi", "NMIT Bangalore", "IIITDM Kancheepuram", "YCCE Nagpur", "GLA University, Mathura", "KIET Group of Institutions, Ghaziabad (KIET Ghaziabad)", "GMRIT Rajam", "Christ University, Bangalore", "IITRAM Ahmedabad", "MMU Ambala", "GCET Greater Noida", "DYPIET Pimpri", "NIT Delhi", "GL Bajaj Institute of Technology and Management, Greater Noida", "KLE Technological University, Hubballi", "DJSCE Mumbai", "SVCET Chittoor", "BMSIT Bangalore", "VJIT Hyderabad"];

            const searchTerm = input.value.toLowerCase();

           
            results.forEach((result) => {
                if (result.toLowerCase().includes(searchTerm)) {
                    const item = document.createElement("div");
                    item.classList.add("search-item");
                    item.innerText = result;
                    item.addEventListener("click", () => {
                        input.value = result;
                        dropdown.style.display = "none";
                    });
                    dropdown.appendChild(item);
                }
            });

            
            if (searchTerm.length > 0) {
                dropdown.style.display = "block";
            } else {
                dropdown.style.display = "none";
            }
        }