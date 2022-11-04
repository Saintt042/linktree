import styled from 'styled-components';

export const ContactMe = styled.div`
  margin: 1.2rem auto 1.2rem auto;
	background-color: white;
	border-radius: 4px;
	box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.3);
	color: ${({ theme }) => theme.colors.textColor};
	max-width: 90%;

  
  .container {
    padding: 16px;
  }
  
  /* Full-width input fields */
  input[type=text], input[type=password] {
    
    height: 10px;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: flex;

    border-radius: 5px;
    background: white;
    border-color: #D0D5DD;
  }

  
  
  input[type=text]:focus, input[type=password]:focus {
    background-color: #ddd;
    outline: none;
  }

  h1{
    margin-bottom: 20px;
  }

  /* Overwrite default styles of hr */
  hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
  }
  
  /* Set a style for the submit button */
  .btn_submit {
    background-color: #1570EF;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }

  
  .btn_submit:hover {
    opacity:1;
  }

  #message{
    height: 150px;
    width: 100%;
    border-radius: 5px;
  }
  
  #email{
   width: 100%;
  }


`;