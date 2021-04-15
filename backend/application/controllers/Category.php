<?php

class Category extends CI_Controller {
    public function __construct()
    {
        parent::__construct();
        $this->load->model("Category_model");
        getHeader();
    }

    public function getCategories() {
        $rows = $this->Category_model->getCategories();
        
        if (empty($rows)) {
            return returnResponse(true, ["Category list is empty"], [], [], 400);
        }

        return returnResponse(true, ["Fetched categories successfully"], $rows, [], 200);
    }

}