// Button Next Previous

const StepNumber = document.querySelectorAll('.NumberStep')
const SectionUser = document.querySelector('#SectionUser')
const Input = document.querySelectorAll('#Input')

function NextClick(i){

    if(Input[0].value == '' || Input[1].value == '' || Input[2].value == '' ){
        for (let index = 0; index < Input.length; index++) {
            const element = Input[index];
            element.style.border = '1px solid hsl(231, 11%, 63%)'

            if (element.value == '') {
                element.style.border = '1px solid red'
            }
            
        }
    }else{
        for (let index = 0; index < StepNumber.length; index++) {
            StepNumber[index].classList.remove('StepActive')
        }
    
        StepNumber[(i-1)].classList.add('StepActive')
    
        switch (i) {
            case 2:
                SectionUser.style.transform = 'translateY(-105%)'
                break;
        
            case 3:
                SectionUser.style.transform = 'translateY(-205%)'
                break;
    
            case 4:
                SectionUser.style.transform = 'translateY(-315%)'
                break;
    
            default:
                break;
        }
    }
}

function BackClick(i){

    console.log(i);

    for (let index = 0; index < StepNumber.length; index++) {
        StepNumber[index].classList.remove('StepActive')
    }

    StepNumber[(i-2)].classList.add('StepActive')

    switch (i) {
        case 2:
            SectionUser.style.transform = 'translateY(0%)'
            break;
    
        case 3:
            SectionUser.style.transform = 'translateY(-105%)'
            break;

        case 4:
            SectionUser.style.transform = 'translateY(-205%)'
            break;

        default:
            break;
    }
}

// Change Plan

const Plan = document.querySelectorAll('.Plan')
let PricePlan = 0

const ChoiceBill = document.getElementById('Checkbox')
let TypeBill

function SelectPlan(i){
    for (let index = 0; index < Plan.length; index++) {
        Plan[index].classList.remove('PlanActive')
    }

    Plan[i].classList.add('PlanActive')

    if (i == 0) {
        PricePlan = 9
    }else if (i == 1) {
        PricePlan = 12
    }else {
        PricePlan = 15
    }
}

function CheckSelect() {
    if (ChoiceBill.checked) {
        TypeBill = 'Yearly'
        document.querySelector('.Year').style.color = 'hsl(213, 96%, 18%)'
        document.querySelector('.Month').style.color = 'hsl(231, 11%, 63%)'   
        PricePlan = PricePlan * 10     
    }else {
        TypeBill = 'Monthly'
        document.querySelector('.Month').style.color = 'hsl(213, 96%, 18%)'
        document.querySelector('.Year').style.color = 'hsl(231, 11%, 63%)'
    }
}

// Add-ons

const TitreAddons = document.querySelectorAll('.AddTitle')
const Addonslabel = document.querySelectorAll('#LabelAdd')
const Addons = document.querySelectorAll('#CheckBox')
let PriceAdd = 0
let AddNumber = []

function ChoiceAddons(i){
    if (Addons[i].checked) {
        Addonslabel[i].classList.add('LabelAddActive')
        TitreAddons[i].style.color = 'hsl(213, 96%, 18%)'

        if (i == 0) {
            PriceAdd = PriceAdd + 1
        }else {
            PriceAdd = PriceAdd + 2
        }

        AddNumber.push(i)
    }else{
        Addonslabel[i].classList.remove('LabelAddActive')
        TitreAddons[i].style.color = 'hsl(231, 11%, 63%)'

        if (PriceAdd == 0) {
            PriceAdd = 0
        }else {
            if (i == 0) {
                PriceAdd = PriceAdd - 1
            }else {
                PriceAdd = PriceAdd - 2
            }
        }

        for (let index = 0; index < AddNumber.length; index++) {
            if (i == AddNumber[index]) {
                AddNumber.splice(index, index + 1)
            }
        }
    }

    if (TypeBill == 'Yearly') {
        PriceAdd = PriceAdd * 10
    }

}

// Finish

const PlanChoice = document.querySelector('.PlanChoiced')
const TypePay = document.querySelectorAll('.TypePayChoiced')
const PlanPrice = document.querySelector('.PriceChoice')
let MoYo

const AddsDisplay = document.querySelectorAll('.Adds')
const Total = document.querySelector('.TotalPrice')

function Final() {

    TypePay.forEach((i)=> {
        if (TypeBill == 'Monthly') {
            i.innerHTML = 'Month'
            MoYo = 'mo'
        }else if(TypeBill == 'Yearly') {
            i.innerHTML = 'Year'
            MoYo = 'yr'
        }
    })

    if (PricePlan == 9 || PricePlan == 90) {
        PlanChoice.innerHTML = 'Arcade'
        PlanPrice.innerHTML = "+$"+PricePlan+"/"+MoYo
    }else if (PricePlan == 12 || PricePlan == 120){
        PlanChoice.innerHTML = 'Advanced'
        PlanPrice.innerHTML = "+$"+PricePlan+"/"+MoYo
    }else if(PricePlan == 15 || PricePlan == 150) {
        PlanChoice.innerHTML = 'Pro'
        PlanPrice.innerHTML = "+$"+PricePlan+"/"+MoYo
    }else {
        PlanPrice.innerHTML = "+$"+PricePlan
    }

    for (let index = 0; index < AddNumber.length; index++) {
        const element = AddNumber[index];
        
        AddsDisplay[element].classList.add('AddsActive')
    }

    const NumberTotal = PriceAdd + PricePlan

    Total.innerHTML = NumberTotal

    console.log(PriceAdd, PricePlan);
}