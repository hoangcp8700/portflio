import TextArea from '@components/atoms/TextArea';
import Typography from '@components/atoms/Typography';
import Container from '@components/common/Container';
import Form from '@components/molecules/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CONTACT_VALIDATE } from '@utils/schemas';
import React from 'react';
import { useForm } from 'react-hook-form';

import Social from './Social';

interface ContactFormProps {}

type ContactFormMethods = {
  name: string;
  email: string;
  content: string;
};

const ContactForm: React.FC<ContactFormProps> = () => {
  const methods = useForm<ContactFormMethods>({
    resolver: yupResolver(CONTACT_VALIDATE),
    defaultValues: { name: '', email: '', content: '' },
  });

  return (
    <div className='t-contactForm'>
      <Container>
        <div className='md:mb-2'>
          <Typography className='sm:text-7xl md:text-8xl text-3xl font-austin italic text-center text-gray-800 duration-300'>
            hoang.pc219@gmail.com
          </Typography>
        </div>
        <Form methods={methods} onSubmit={(value) => console.log('form', value)}>
          <Form.FormGroup>
            <div className='flex'>
              <Form.InputControl name='name' placeholder='Your full name' />
              <Form.InputControl name='email' placeholder='Your email' />
            </div>
            <Form.FormControl
              name='content'
              render={({ field }) => <TextArea {...field} rows={2} placeholder='How may i help you?' />}
            />
          </Form.FormGroup>
          <div className='flex justify-between items-center mt-2'>
            <Social />
            <Form.FieldSubmit variants='primary' radius='full'>
              Submit
            </Form.FieldSubmit>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ContactForm;
