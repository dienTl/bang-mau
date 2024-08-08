document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form (gửi dữ liệu)
    
    // Lấy giá trị từ ô input
    var inputValue = document.getElementById("inputField").value;
    
    // Hiển thị giá trị trong thẻ p có id là "output"
    document.getElementById("output").innerText = "Dữ liệu đã nhập: " + inputValue;
});