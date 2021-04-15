<?php

class Contact extends CI_Controller {
    public function __construct()
    {
        parent::__construct();
        $this->load->model("Contact_model");
        getHeader();
    }

    public function sendMessage() {
        try {
            $request = getRequest();
            $result = $this->Contact_model->sendMessage($request);
            return returnResponse(true, ["Message Sent Successfully"], [], [], 200);

        } catch (Exception $e) {
            echo $e->getMessage();
            return returnResponse(true, ["An error occurred while sending message"], [], [], 400);
        }   
    }

}