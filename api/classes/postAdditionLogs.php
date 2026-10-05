<?php

class PostAdditionLogs
{
    public $id;
    public $timestamp;

    public $caption;
    public function __construct($id, $timestamp, $caption)
    {
        $this->id = $id;
        $this->timestamp = $timestamp;
        $this->caption = $caption;
    }
}