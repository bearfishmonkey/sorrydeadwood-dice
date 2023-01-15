control.onEvent(EventBusSource.MICROBIT_ID_IO_P4, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (CARD4_QTY != 0) {
        CARD4_QTY += -1
        basic.showNumber(-4)
    } else {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P20,
        EventBusValue.MICROBIT_EVT_ANY
        )
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P5, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (CARD5_QTY != 0) {
        CARD5_QTY += -1
        basic.showNumber(5)
    } else {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P20,
        EventBusValue.MICROBIT_EVT_ANY
        )
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P7, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (CARD7_QTY != 0) {
        CARD7_QTY += -1
        basic.showNumber(7)
    } else {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P20,
        EventBusValue.MICROBIT_EVT_ANY
        )
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(500)
    if (CARD1_QTY + CARD2_QTY + CARD_3_QTY + CARD4_QTY + CARD5_QTY + CARD7_QTY + CARD8_QTY + CARD10_QTY + CARD11_QTY + CARD12_QTY + CARD_SORRY_QTY == 0) {
        basic.showString("X")
        basic.pause(200)
        basic.clearScreen()
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P19,
        EventBusValue.MICROBIT_EVT_ANY
        )
    }
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_IO_P20,
    EventBusValue.MICROBIT_EVT_ANY
    )
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P20, EventBusValue.MICROBIT_EVT_ANY, function () {
    pick_random = randint(1, 11)
    if (pick_random == 1) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P1,
        EventBusValue.MICROBIT_EVT_ANY
        )
    } else if (pick_random == 2) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P2,
        EventBusValue.MICROBIT_EVT_ANY
        )
    } else if (pick_random == 3) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P3,
        EventBusValue.MICROBIT_EVT_ANY
        )
    } else if (pick_random == 4) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P4,
        EventBusValue.MICROBIT_EVT_ANY
        )
    } else if (pick_random == 5) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P5,
        EventBusValue.MICROBIT_EVT_ANY
        )
    } else if (pick_random == 6) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P7,
        EventBusValue.MICROBIT_EVT_ANY
        )
    } else if (pick_random == 7) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P8,
        EventBusValue.MICROBIT_EVT_ANY
        )
    } else if (pick_random == 8) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P10,
        EventBusValue.MICROBIT_EVT_ANY
        )
    } else if (pick_random == 9) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P11,
        EventBusValue.MICROBIT_EVT_ANY
        )
    } else if (pick_random == 10) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P12,
        EventBusValue.MICROBIT_EVT_ANY
        )
    } else if (pick_random == 11) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P13,
        EventBusValue.MICROBIT_EVT_ANY
        )
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P12, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (CARD12_QTY != 0) {
        CARD11_QTY += -1
        basic.showNumber(12)
    } else {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P20,
        EventBusValue.MICROBIT_EVT_ANY
        )
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P3, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (CARD_3_QTY != 0) {
        CARD_3_QTY += -1
        basic.showNumber(3)
    } else {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P20,
        EventBusValue.MICROBIT_EVT_ANY
        )
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P1, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (CARD1_QTY != 0) {
        CARD1_QTY += -1
        basic.showNumber(1)
    } else {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P20,
        EventBusValue.MICROBIT_EVT_ANY
        )
    }
})
input.onButtonPressed(Button.B, function () {
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_IO_P19,
    EventBusValue.MICROBIT_EVT_ANY
    )
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P10, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (CARD10_QTY != 0) {
        CARD10_QTY += -1
        basic.showNumber(10)
        basic.showNumber(-1)
    } else {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P20,
        EventBusValue.MICROBIT_EVT_ANY
        )
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P19, EventBusValue.MICROBIT_EVT_ANY, function () {
    CARD1_QTY = 5
    CARD2_QTY = 4
    CARD_3_QTY = 4
    CARD4_QTY = 4
    CARD5_QTY = 4
    CARD7_QTY = 4
    CARD8_QTY = 4
    CARD10_QTY = 4
    CARD11_QTY = 4
    CARD12_QTY = 3
    CARD_SORRY_QTY = 4
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P8, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (CARD8_QTY != 0) {
        CARD8_QTY += -1
        basic.showNumber(8)
    } else {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P20,
        EventBusValue.MICROBIT_EVT_ANY
        )
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P2, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (CARD2_QTY != 0) {
        CARD2_QTY += -1
        basic.showNumber(2)
    } else {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P20,
        EventBusValue.MICROBIT_EVT_ANY
        )
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P11, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (CARD11_QTY != 0) {
        CARD11_QTY += -1
        basic.showNumber(11)
    } else {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P20,
        EventBusValue.MICROBIT_EVT_ANY
        )
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P13, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (CARD_SORRY_QTY != 0) {
        CARD_SORRY_QTY += -1
        basic.showString("SORRY")
    } else {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P20,
        EventBusValue.MICROBIT_EVT_ANY
        )
    }
})
let pick_random = 0
let CARD_SORRY_QTY = 0
let CARD12_QTY = 0
let CARD11_QTY = 0
let CARD10_QTY = 0
let CARD8_QTY = 0
let CARD_3_QTY = 0
let CARD2_QTY = 0
let CARD1_QTY = 0
let CARD7_QTY = 0
let CARD5_QTY = 0
let CARD4_QTY = 0
control.raiseEvent(
EventBusSource.MICROBIT_ID_IO_P19,
EventBusValue.MICROBIT_EVT_ANY
)
