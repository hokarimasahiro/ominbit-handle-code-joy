radio.onReceivedString(function (receivedString) {
    受信文字列 = receivedString
})
let Y = 0
let X = 0
let 受信文字列 = ""
let TYPE = 0
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
if (pins.digitalReadPin(DigitalPin.P16) == 0) {
    TYPE = 0
} else {
    TYPE = 1
}
let 無線グループ = 0
let 無線グループ設定中 = true
getradiogroup.initRadioGroup()
basic.showIcon(IconNames.SmallHeart)
while (無線グループ == 0) {
    無線グループ = getradiogroup.getRadioGroup(受信文字列)
    if (無線グループ == 0) {
        basic.showIcon(IconNames.Sad)
    } else {
        watchfont.showNumber2(無線グループ)
    }
}
radio.setTransmitPower(7)
受信文字列 = ""
無線グループ設定中 = false
basic.forever(function () {
    if (!(無線グループ設定中)) {
        X = pins.analogReadPin(AnalogPin.P1) * 1 - 512
        Y = pins.analogReadPin(AnalogPin.P2) * 1 - 512
        radio.sendString("$," + convertToText(X) + "," + convertToText(Y))
    }
})
basic.forever(function () {
    if (TYPE == 0) {
        if (pins.digitalReadPin(DigitalPin.P12) == 0) {
            radio.sendNumber(1)
        } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
            radio.sendNumber(2)
        } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
            radio.sendNumber(3)
        } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
            radio.sendNumber(4)
        } else if (pins.digitalReadPin(DigitalPin.P5) == 0) {
            radio.sendNumber(5)
        } else if (pins.digitalReadPin(DigitalPin.P11) == 0) {
            radio.sendNumber(6)
        } else {
            radio.sendNumber(0)
        }
    } else {
        if (pins.digitalReadPin(DigitalPin.P15) == 0) {
            radio.sendNumber(1)
        } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
            radio.sendNumber(2)
        } else if (pins.digitalReadPin(DigitalPin.P8) == 0) {
            radio.sendNumber(3)
        } else if (pins.digitalReadPin(DigitalPin.P12) == 0) {
            radio.sendNumber(4)
        } else if (pins.digitalReadPin(DigitalPin.P5) == 0) {
            radio.sendNumber(5)
        } else if (pins.digitalReadPin(DigitalPin.P11) == 0) {
            radio.sendNumber(6)
        } else {
            radio.sendNumber(0)
        }
    }
})
