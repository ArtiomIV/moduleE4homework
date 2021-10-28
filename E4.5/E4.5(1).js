class Device{
    constructor(name, consumption, brend){
        this.name = name;
        this.consumKw = consumption;
        this.brend = brend;
        this.voltageType = 230;
        this.deviceTye = 'Electrical device'
        this.active = false
    }

    getConsumption(consumption){
        return consumption
    }

    setActive(){
        this.active = true
        return this.active
    }

    setInactive(){
        this.active = false
        return this.active
    }
}

const desktop = new Device('pc', 0.6, 'custom')
const microwave = new Device('microwave', 0.3, 'lg')
const heater = new Device('heater', 0.5, 'ariete')

desktop.setActive()
heater.setActive()

function calcuateConsumption(obj, obj1, obj2){
    let consum = 0;
    for (let key in arguments){
        if (arguments[key].active == true){
            consum += arguments[key].getConsumption(arguments[key].consumKw)
        }
    }
    console.log(consum)
    return consum
}


setInterval(calcuateConsumption, 1000, desktop, microwave, heater)
