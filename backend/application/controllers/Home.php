<?php

class Home extends CI_Controller {
    public function __construct()
    {
        parent::__construct();
        $this->load->model("Home_model");
        getHeader();
    }

    public function getHomeSliderInfo() {
        return returnResponse(true, ["Get Home Slider Information Successfully"], [], [], 200);
    }

}