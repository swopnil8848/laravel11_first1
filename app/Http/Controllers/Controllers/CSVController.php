<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Imports\LeadsImport;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\HeadingRowImport;

class CSVController extends Controller
{
    public function uploadCSV(Request $request)
    {
        try {
            $request->validate([
                'csv_file' => 'required|file|mimes:xlsx,xls,csv'
            ]);

            // Get the file from the request
            $file = $request->file('csv_file');

            Excel::import(new LeadsImport, $file);

            return redirect()->back()
                ->with('message', 'CSV file uploaded successfully.')
                ->with('header', 'Success');
        } catch (\Throwable $th) {
            return redirect()->back()
                ->with('message', 'An error occurred while uploading the CSV file.')
                ->with('header', 'Error');
        }
    }
}
