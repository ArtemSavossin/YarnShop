import React from "react"
import { Email, Item, Span, A, renderEmail, Box } from "react-html-email"

export const generateEmail = (order) => {
  return renderEmail(
    <Email title={`Заказ ${order._id}`}>
      <Span>Привет! Спасибо, что отсавил заказ на missyarn.kz!</Span>
      <Span>Твой заказ:</Span>
      <Box>
        {order.orderItems.map((item) => (
          <Item>
            <Item>{item.name}</Item>
            <Item>{item.price * item.qty}</Item>
            <Item>good</Item>
          </Item>
        ))}
        <Item>
          <strong>Итого: </strong>
          {order.itemsPrice}
        </Item>
      </Box>
      <Span>
        Чтобы получить свой заказ тебе необходимо оплатить его с помощью
        перевода kaspi по номеру +7(777)777-77-77 или на qiwi кошелек
      </Span>
    </Email>
  )
}
