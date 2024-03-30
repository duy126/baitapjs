// bài toán 1
function inRaKetQua(){
    var select1 = document.getElementById("select1").value;
    var select2 = document.getElementById("select2").value;
    var diemKhuVuc = 0;
    var diemDoiTuong = 0;
    var diemTong = 0;
    var diemChuan = document.getElementById("diemChuan").value *1;
    var diemMonThu1 = document.getElementById("diemMonThu1").value *1;
    var diemMonThu2 = document.getElementById("diemMonThu2").value *1;
    var diemMonThu3 = document.getElementById("diemMonThu3").value *1;
    if(diemMonThu1 == 0 || diemMonThu2 == 0 || diemMonThu3 == 0){
        document.getElementById("result1").innerText = `Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0`;
        return;
    }
   
    if(select1 == 1 ){
        diemKhuVuc = 2;
    } else if( select1 == 2)
    {
        diemKhuVuc = 1;
    } else if( select1 =2)
    {
        diemKhuVuc = 0.5;
    }
    if(select2 == 1 ){
        diemDoiTuong = 2.5;
    } else if( select2 == 2)
    {
        diemDoiTuong = 1.5;
    } else if( select2 =2)
    {
        diemDoiTuong = 1;
    }
    diemTong = diemMonThu1 + diemMonThu2 + diemMonThu3 + diemKhuVuc + diemDoiTuong;
    console.log("🐧🐧🐧 ~ inRaKetQua ~ diemTong:", diemTong)
    if(diemTong >=  diemChuan){
        document.getElementById("result1").innerText = `Bạn đã đậu. Tổng điểm: ${diemTong}`
    } else {
        document.getElementById("result1").innerText = `Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0`;
    }
}
// bài toán 2
function tinhDien(){
    var hoVaTen = document.getElementById("txt-ten").value;
    console.log("🐧🐧🐧 ~ tinhTienDien ~ hoVaTen:", hoVaTen)
    var soKw  =document.getElementById("soKw").value *1;
    console.log("🐧🐧🐧 ~ tinhTienDien ~ soKw:", soKw)
    var tongSoTien = 0;
    if(soKw <= 50){
    tongSoTien = soKw*500
    } else if(soKw <=100){
    tongSoTien = 50*500 + (soKw-50)*650;
    } else if(soKw <=200){
        tongSoTien = 50*500 + 50*650 + (soKw-100)*850;
    } else if(soKw <=350){
        tongSoTien = 50*500 + 50*650 + 100*850 + (soKw - 200)*1100;
    } else{
        tongSoTien = 50*500 + 50*650 + 100*850 + 150*1100 + (soKw -350)*1300;
    }
    document.getElementById("result2").innerText = `Họ tên: ${hoVaTen}; số tiền điện: ${tongSoTien}`
}
// bài toán 3
function tinhTienThue(){
    var hoVaTen = document.getElementById("txtTen2").value;
    var tongThuNhap = document.getElementById("tongThuNhap").value*1;
    var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value*1;
    var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc*1600000;
    if(thuNhapChiuThue<=60000000){
        thuNhapChiuThue *=0.05;

    } else if(thuNhapChiuThue<=120000000){
        thuNhapChiuThue *=0.1;
    } else if(thuNhapChiuThue<=210000000){
        thuNhapChiuThue *=0.15;
    } else if(thuNhapChiuThue<=384000000){
        thuNhapChiuThue *=0.2;
    } else if(thuNhapChiuThue<=624000000){
        thuNhapChiuThue *=0.25;
    } else if(thuNhapChiuThue<=960000000){
        thuNhapChiuThue *=0.30;
    } else{
        thuNhapChiuThue *=0.35;
        
    };
    console.log("🐧🐧🐧 ~ tinhTienThue ~ thuNhapChiuThue:", thuNhapChiuThue);
    document.getElementById("result3").innerText = `Họ và tên: ${hoVaTen}; tiền thuế thu nhập cá nhân: ${thuNhapChiuThue} VNĐ`
    
}
// bài 4
function hienAn(){
    var check = document.getElementById("select3").value;
    if (check == 1){
        document.getElementById("soKetNoi").style.display = 'none';
    } else{
        document.getElementById("soKetNoi").style.display = 'block';
    }
}
function tinhTienCap(){
    var select3 = document.getElementById("select3").value;
    var maKhachHang = document.getElementById("maKhachHang").value*1;
    var soKenhCaoCap = document.getElementById("soKenhCaoCap").value *1;
    var soKetNoi = document.getElementById("soKetNoi").value*1;
    var phiXuLyHoaDon = 0;
    var phiDichVuCoBan = 0;
    if(select3 == 1){
        document.getElementById("result4").innerText = `Mã khách hàng: ${maKhachHang}; Tiền cáp: ${soKenhCaoCap*7.5 + 25}$`
    } else{
        if(soKetNoi <= 10){
            document.getElementById("result4").innerText = `Mã khách hàng: ${maKhachHang}; Tiền cáp: ${soKenhCaoCap*50 + 15 + 7.5*soKetNoi}$`
        } else{
            document.getElementById("result4").innerText = `Mã khách hàng: ${maKhachHang}; Tiền cáp: ${soKenhCaoCap*50 + (soKetNoi-10)*5 + 90}$`
        }
    }
    
}