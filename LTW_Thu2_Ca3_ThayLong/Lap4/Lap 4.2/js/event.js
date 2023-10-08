function giaiPhuongTrinh() {
    // Lấy giá trị a, b, và c từ các ô nhập liệu
    document.querySelector('.ketQua').innerText ='';
    const a = parseFloat(document.querySelector(".a").value.trim());
    const b = parseFloat(document.querySelector(".b").value.trim());
    const c = parseFloat(document.querySelector(".c").value.trim());

    if(a ===0) {
        document.querySelector('.ketQua').innerText ='Đây không phải là phương trình bậc 2';
    } else {
        // Tính delta
        const delta = b * b - 4 * a * c;

        // Tính nghiệm
        if (delta > 0) {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            document.querySelector('.ketQua').innerText = `Phương trình có hai nghiệm: x1 = ${x1}, x2 = ${x2}`;
        } else if (delta === 0) {
            const x = -b / (2 * a);
            document.querySelector('.ketQua').innerText = `Phương trình có nghiệm kép: x = ${x}`;
        } else {
            document.querySelector('.ketQua').innerText = "Phương trình vô nghiệm";
        }
    }

}