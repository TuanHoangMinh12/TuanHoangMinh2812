function tinhSoLanXuatHien() {
    // Lấy giá trị từ textarea (A) và textfield (B)
    const textA = document.getElementById("textA").value.trim();
    const textB = document.getElementById("textB").value.trim();

    // Sử dụng biểu thức chính quy để tìm số lần xuất hiện của B trong A
    const regex = new RegExp(textB, 'g');
    const matches = textA.match(regex);

    // Đếm số lần xuất hiện và hiển thị kết quả
    const soLanXuatHien = matches ? matches.length : 0;
    const ketQuaElement = document.getElementById("ketQua");
    ketQuaElement.innerHTML = `Số lần xuất hiện của "${textB}" trong đoạn văn là: ${soLanXuatHien}`;
}