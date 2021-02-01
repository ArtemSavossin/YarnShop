import React from 'react';
import { Table } from 'react-bootstrap';
import FormContainer from '../components/FormContainer.js';

const ContactsScreen = () => {
  return (
    <FormContainer>
      <h2>Контакты</h2>
      <Table variant='flush'>
        <tbody>
          <tr>
            <td>Instagram</td>
            <td>
              <a
                href='https://www.instagram.com/miss.yarn/'
                target='_blank'
                rel='noreferrer'
              >
                @miss.yarn
              </a>
            </td>
          </tr>
          <tr>
            <td>Whatsapp</td>
            <td>
              <a
                href='https://wa.me/87015359475'
                target='_blank'
                rel='noreferrer'
              >
                87015359475
              </a>
            </td>
          </tr>
          <tr>
            <td>Telegram</td>
            <td>
              <a
                href='tg://resolve?domain=MissYarnBot'
                target='_blank'
                rel='noreferrer'
              >
                87015359475
              </a>{' '}
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <h2>Адреса</h2>
      <Table variant='flush'>
        <tbody>
          <tr>
            <td>Самовывоз</td>
            <td>улица Дукенулы 32/1</td>
          </tr>
          <tr>
            <td>Магазин</td>
            <td>ТЦ "Артем", 4 этаж, бутик 78 «Паучок»</td>
          </tr>
          <tr>
            <td>Магазин</td>
            <td>
              Ул. Валиханова 1, вход с стороны ул. Гумар-Караш, бутик
              "Жар-птица".
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </FormContainer>
  );
};
export default ContactsScreen;
