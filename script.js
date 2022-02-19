$(document).ready(function (){
    "use strict";
    /*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
    const gBASE_URL_DRINK = "http://42.115.221.44:8080/devcamp-pizza365/drinks";
    const gBASE_URL_VOUCHER =  "http://42.115.221.44:8080/devcamp-voucher-api/voucher_detail/";
    const gBASE_URL_ORDER = "http://42.115.221.44:8080/devcamp-pizza365/orders";
    // biến toàn cục dùng để lưu trữ combo được chọn, mỗi khi khách chọn bạn lại đổi giá trị properties của nó
    var gSelectedMenuStructure = {
        menuName: "...",    // S, M, L
        duongKinhCM: "",
        suongNuong: "",
        saladGr: "",
        drink: "",
        priceVND: "",
        totalPrice: "",
        loaiNuocNgot: "Tất cả loại nước uống"
      };
    // biến toàn cục để lưu loại pizza đươc chọn, mỗi khi khách chọn, bạn lại đổi giá trị cho nó
    var gSelectedPizzaType = "..."
    // biến toàn cục Object input của customer khi nhập vào dữ liệu
    var gInputCustomerObject = {};
    //biến toàn cục select Drink
    var gSelectDrink = {};
    //biến toàn cục phần trăm giảm giá
    var gDiscount = "";
    /*** REGION 2 - Vùng gán / thực thi hàm xử lý sự kiện cho các elements */
    onloadingPage();
    //gán sự kiện click cho nút size S
    $("#btn-size-s").on("click", function(){
        onButtonSizeSClick()
    });
    //gán sự kiện click cho nút size m
    $("#btn-size-m").on("click", function(){
        onButtonSizeMClick()
    });
    //gán sự kiện click cho nút size m
    $("#btn-size-l").on("click", function(){
        onButtonSizeLClick()
    });
    //gán sự kiện click cho nút loại pizza ocean mania
    $("#bnt-pizza-type-1").on("click", function(){
        onButtonPizzaOceanClick()
    });
    //gán sự kiện click cho nút loại pizza hawaiian
    $("#bnt-pizza-type-2").on("click", function(){
        onButtonPizzaHawaiianClick()
    });
    //gán sự kiện click cho nút loại pizza bacon
    $("#bnt-pizza-type-3").on("click", function(){
        onButtonPizzaBaconClick()
    });
    //gán sự kiện click cho nút Gửi order
    $("#send-order").on("click", function(){
        onButtonSendClick()
    });
    //gán sự kiện click cho nút tạo đơn trên modal
    $("#btn-agree").on("click", function(){
        onButtonAgreeClick()
    });
    //gán sự kiện click cho nút close trên modal
    $("#btn-close").on("click", function(){
        //reload lại trang
        location.reload();
    })
    /*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
    //hàm xử lý sự kiện click cho nút size S
    function  onButtonSizeSClick(){
        console.log("button Size S click");
        //Đổi màu nút
        $("#btn-size-s").removeClass("btn-warning").addClass("btn-success");
        $("#btn-size-m").removeClass("btn-success").addClass("btn-warning");
        $("#btn-size-l").removeClass("btn-success").addClass("btn-warning");
        var vPizzaSizeS = {
            menuName: "S",
            duongKinhCM: "20",
            suongNuong: "2",
            saladGr: "200",
            drink: "2",
            priceVND: "150000"
        }
        //gán dữ liệu vào gSelectedMenuComboSize khi user ấn nút
        gSelectedMenuStructure = vPizzaSizeS;
        console.log(gSelectedMenuStructure);        
    }
    
    //hàm xử lý sự kiện click cho nút size M
    function onButtonSizeMClick(){
        console.log("button Size M click");
        //Đổi màu nút
        $("#btn-size-m").removeClass("btn-warning").addClass("btn-success");
        $("#btn-size-s").removeClass("btn-success").addClass("btn-warning");
        $("#btn-size-l").removeClass("btn-success").addClass("btn-warning");
        //Dữ liệu trong combo pizza size M
        var vPizzaSizeM = {
            menuName: "M",
            duongKinhCM: "25",
            suongNuong: "4",
            saladGr: "300",
            drink: "3",
            priceVND: "200000"
        }
        //gán dữ liệu vào gSelectedMenuComboSize khi user ấn nút
        gSelectedMenuStructure = vPizzaSizeM;
        console.log(gSelectedMenuStructure);    
    }

    //hàm xử lý sự kiện click cho nút size L
    function onButtonSizeLClick(){
        console.log("button Size L click");
        //Đổi màu nút
        $("#btn-size-l").removeClass("btn-warning").addClass("btn-success");
        $("#btn-size-s").removeClass("btn-success").addClass("btn-warning");
        $("#btn-size-m").removeClass("btn-success").addClass("btn-warning");
        //Dữ liệu trong combo pizza size L
        var vPizzaSizeL = {
            menuName: "L",
            duongKinhCM: "30",
            suongNuong: "8",
            saladGr: "500",
            drink: "4",
            priceVND: "250000"
        }
        //gán dữ liệu vào gSelectedMenuComboSize khi user ấn nút
        gSelectedMenuStructure = vPizzaSizeL;
        console.log(gSelectedMenuStructure);
    }

    //hàm xử lý sự kiện click pizza OCEAN
    function onButtonPizzaOceanClick(){
        console.log("button loại pizza OCEAN mania click");
        //Đổi màu nút khi nhấn
        $("#bnt-pizza-type-1").removeClass("btn-warning").addClass("btn-success");
        $("#bnt-pizza-type-2").removeClass("btn-success").addClass("btn-warning");
        $("#bnt-pizza-type-3").removeClass("btn-success").addClass("btn-warning");
        //Dữ liệu trong pizza type 1
        var vPizzaStypeOne = "Ocean Mania";
        //gán dữ liệu vào dữ liệu chung khi ấn nút
        gSelectedPizzaType = vPizzaStypeOne;
        console.log(gSelectedPizzaType);
    }

    //hàm xử lý sự kiện click pizza HAWAIIAN
    function onButtonPizzaHawaiianClick(){
        console.log("button loại pizza HAWAIIAN click");
        //Đổi màu nút khi nhấn
        $("#bnt-pizza-type-2").removeClass("btn-warning").addClass("btn-success");
        $("#bnt-pizza-type-1").removeClass("btn-success").addClass("btn-warning");
        $("#bnt-pizza-type-3").removeClass("btn-success").addClass("btn-warning");
        //Dữ liệu trong pizza type 1
        var vPizzaStypeOne = "Hawaiian";
        //gán dữ liệu vào dữ liệu chung khi ấn nút
        gSelectedPizzaType = vPizzaStypeOne;
        console.log(gSelectedPizzaType);
    }

    //hàm xử lý sự kiện click pizza BACON
    function onButtonPizzaBaconClick(){
        console.log("button loại pizza BACON click");
        //Đổi màu nút khi nhấn
        $("#bnt-pizza-type-3").removeClass("btn-warning").addClass("btn-success");
        $("#bnt-pizza-type-1").removeClass("btn-success").addClass("btn-warning");
        $("#bnt-pizza-type-2").removeClass("btn-success").addClass("btn-warning");
        //Dữ liệu trong pizza type 1
        var vPizzaStypeOne = "Bacon";
        //gán dữ liệu vào dữ liệu chung khi ấn nút
        gSelectedPizzaType = vPizzaStypeOne;
        console.log(gSelectedPizzaType);
    }

    //hàm load dữ liệu select cho drink
    function onloadingPage(){
        //send request lên API để load dữ liệu select
        $.ajax({
            url: gBASE_URL_DRINK,
            type: "GET",
            dataType: 'json',
            success: function(responseObject){
            gSelectDrink = responseObject
            console.log(gSelectDrink);
            //load data lên select
            loadDataToSelectDrink(gSelectDrink);
            },
            error: function(error){
            console.assert(error.responseText);
            }
        });
    }

    //hàm xử lý sự kiện nút send click
    function onButtonSendClick(){
        "use strict";
        console.log("nút gửi click");
        var vInputCustomerObject = gInputCustomerObject
        // B1: thu thap du lieu
        getInputFormData(vInputCustomerObject);
        // B2: kiem tra du lieu
        var vIsValidData = validateData(vInputCustomerObject);
        if( vIsValidData){
            //B3: check voucher
            checkVoucher(vInputCustomerObject);
            console.log(vInputCustomerObject);
            //B4: hiển thị modal
            //lưu thông tin lên modal
            showInfoDataToModal(vInputCustomerObject);
            //hiển thị thông tin lên modal
            $('#order-modal').modal('show');
        }
    }

    //hàm xử lý sự kiện nút tạo đơn click
    function onButtonAgreeClick(){
        console.log("nút tạo đơn click");
        // Khai báo đối tượng chứa dữ liệu trên form
        var vOrderObj = {
            kichCo: "",
            duongKinh: "",
            suon: "",
            salad: "",
            loaiPizza: "",
            idVourcher: "",
            idLoaiNuocUong: "",
            soLuongNuoc: "",
            hoTen: "",
            thanhTien: "",
            email: "",
            soDienThoai: "",
            diaChi: "",
            loiNhan: ""
        };
        //B1: thu thập dữ liệu
        getOrderObj(vOrderObj);
        console.log(vOrderObj);
        //B2: kiểm tra dữ liệu (không cần đã kiểm tra khi nhập input)
        //B3: sendrequest tạo mới đơn hàng trên API
        $.ajax({
            url: gBASE_URL_ORDER,
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(vOrderObj),
            dataType: 'json', // added data type
            success: function (res) {
                //B4: xử lý front-end
                console.log(res);
                showModalVerify(res);
            },
            error: function () {
            alert("Gửi đơn chưa thành công//có thể hệ thống lỗi//liên hệ nhân viên để được trợ giúp")
            }
        });

    }
    
    /*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
    //hàm load dữ liệu data vào select
    function loadDataToSelectDrink(paramObject){
        var vSelectDrink = $("#select-drink");
        for (var bI = 0; bI < paramObject.length; bI++) {
            var vOptionDrink = $("<option/>", {
                value: paramObject[bI].maNuocUong,
                text: paramObject[bI].tenNuocUong
            }).appendTo(vSelectDrink);
        }
    }

    //hàm thu thu thập dữ liệu
    function getInputFormData(paramInputCustomer){
        paramInputCustomer.fullName = $("#inp-fullname").val().trim();
        paramInputCustomer.email = $("#inp-email").val().trim();
        paramInputCustomer.phoneNumber = $("#inp-dien-thoai").val().trim();
        paramInputCustomer.address = $("#inp-dia-chi").val().trim();
        paramInputCustomer.note = $("#inp-message").val().trim();
        paramInputCustomer.voucher = $("#voucher-ID").val().trim();
        paramInputCustomer.loaiNuocNgot = $("#select-drink").val();
    }

    //hàm kiểm tra dữ liệu
    function validateData(paramInputCustomer){
        "use strict";
        if (gSelectedMenuStructure.menuName === "...") {
            alert("Vui lòng chọn Combo Menu");
            return false;
        }
        if (gSelectedPizzaType === "..."){
            alert("Vui lòng chọn Loại Pizza");
            return false;
        }
        if (paramInputCustomer.loaiNuocNgot === "none") {
            alert("Vui lòng chọn Loại đồ uống");
            return false;
        }
        if (paramInputCustomer.fullName === "") {
            alert("Vui lòng nhập họ và tên");
            return false;
        }
        var vFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(paramInputCustomer.email === ""|| !vFilter.test(paramInputCustomer.email)){
            alert("Vui lòng nhập Email hợp lệ //Vd: abc@gmail.com");
            return false;
        }
        var vRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (paramInputCustomer.phoneNumber === ""|| !vRegex.test(paramInputCustomer.phoneNumber)) {
            alert("Vui lòng nhập đúng số điện thoại //Vd: 0912345678");
            return false;
        }
        if (paramInputCustomer.address === "") {
            alert("Vui lòng nhập địa chỉ");
            return false;
        }
        return true;
    }

    //hàm kiểm tra mã giảm giá
    function checkVoucher(paramVoucherCheck){
        var vVoucherCheck = paramVoucherCheck.voucher;
        if(vVoucherCheck == ""){
            vVoucherCheck = 0
        }
        //send request lên API để check voucher
        $.ajax({
            url:  gBASE_URL_VOUCHER + vVoucherCheck,
            type: 'GET',
            dataType: 'json',
            success: function(res) {
                console.log(res);
                gDiscount = res.phanTramGiamGia;
                console.log(gDiscount);
                //số tiền được giảm
                var vPaymentDiscount = paymentDiscount(gSelectedMenuStructure.priceVND, gDiscount);
                // lưu thông tin số tiền được giảm vào modal
                $("#discount-modal").val(vPaymentDiscount + " (Giảm " + gDiscount + "%)");
                //số tiền phải thanh toán
                var vpayment = gSelectedMenuStructure.priceVND - vPaymentDiscount;
                // lưu thông tin số tiền phải thanh toán vào modal
                $("#payment-modal").val(vpayment);
            },
            error: function () {
                $("#voucher-modal").val("none/false");
                $("#discount-modal").val("0");
                $("#payment-modal").val(gSelectedMenuStructure.priceVND);
            }
        })
    }

    //hàm tính giá được giảm
    function paymentDiscount(paramA, paramB){
        return (paramA*paramB/100);
    }

    //hàm xử lý lưu thông tin vào modal
    function showInfoDataToModal(paramOrderObject){
        $("#fullname-modal").val(paramOrderObject.fullName);
        $("#phonenumber-modal").val(paramOrderObject.phoneNumber);
        $("#email-modal").val(paramOrderObject.email);
        $("#address-modal").val(paramOrderObject.address);
        $("#voucher-modal").val(paramOrderObject.voucher);
        $("#msg-modal").val(paramOrderObject.note);
        $("#info-order").val("Menu: " + gSelectedMenuStructure.menuName +
                             ", Sườn nướng: " + gSelectedMenuStructure.suongNuong +
                             ", Salad: " + gSelectedMenuStructure.saladGr +
                             ", Loại nước: " + paramOrderObject.loaiNuocNgot +
                             ", Số lượng nước: " + gSelectedMenuStructure.drink +
                             ", Loại Pizza: " + gSelectedPizzaType);
        $("#price-modal").val(gSelectedMenuStructure.priceVND);    
    }

    //tổng hợp lại dữ liệu để sendrequest tạo mới order lên API
    function getOrderObj(paramOrderObjToSendAPI){
        paramOrderObjToSendAPI.kichCo = gSelectedMenuStructure.menuName;
        paramOrderObjToSendAPI.duongKinh = gSelectedMenuStructure.duongKinhCM;
        paramOrderObjToSendAPI.suon = gSelectedMenuStructure.suongNuong;
        paramOrderObjToSendAPI.salad = gSelectedMenuStructure.saladGr;
        paramOrderObjToSendAPI.loaiPizza = gSelectedPizzaType;
        paramOrderObjToSendAPI.idVourcher = gInputCustomerObject.voucher;
        paramOrderObjToSendAPI.idLoaiNuocUong = gInputCustomerObject.loaiNuocNgot;
        paramOrderObjToSendAPI.soLuongNuoc = gSelectedMenuStructure.drink;
        paramOrderObjToSendAPI.hoTen = gInputCustomerObject.fullName;
        paramOrderObjToSendAPI.thanhTien = gSelectedMenuStructure.priceVND;
        paramOrderObjToSendAPI.email = gInputCustomerObject.email;
        paramOrderObjToSendAPI.soDienThoai = gInputCustomerObject.phoneNumber;
        paramOrderObjToSendAPI.diaChi = gInputCustomerObject.address;
        paramOrderObjToSendAPI.loiNhan = gInputCustomerObject.note;
    }

    //hàm show modal verify đến customer
    function showModalVerify(paramVerfy){
        //ẩn modal order
        $("#order-modal").modal("hide");
        var vOrderId = paramVerfy.orderId
        $("#order-id").val(vOrderId);
        $("#verify-modal").modal("show");    
    }
});
