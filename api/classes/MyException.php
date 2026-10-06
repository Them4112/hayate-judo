<?php

class MyException extends Exception
{
    public function __construct($message, $code)
    {
        $this->message = $message;
        $this->code = $code;
    }
}