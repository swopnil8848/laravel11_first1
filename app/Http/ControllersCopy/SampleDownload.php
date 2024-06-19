<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class SampleDownload extends Controller
{
    public function download(){
        $path=public_path('assets/samplefile.xlsx');
        $fileName = 'sample_fagoon.xlsx';
        return Response::download($path, $fileName, ['Content-Type: application/vnd.ms-excel']);

    }
    //
}
