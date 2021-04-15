<?php

class Author extends CI_Controller {
    public function __construct()
    {
        parent::__construct();
        $this->load->model("Author_model");
        getHeader();
    }

    public function getAll() {
        $rows = $this->Author_model->getAll();
        
        if (empty($rows)) {
            return returnResponse(true, ["Author list is empty"], [], [], 400);
        }

        return returnResponse(true, ["Fetched authors successfully"], $rows, [], 200);
    }

    public function get() {
        $request = getRequest();
        $author = $this->Author_model->get($request);
        return returnResponse(true, ["Fetched author successfully"], $author, [], 200);
    }

}