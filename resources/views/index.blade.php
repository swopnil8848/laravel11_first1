@section('title')
    Dashboard
@endsection
@section('page-title')
    Dashboard
@endsection
@section('content')
    {{-- Dashboard counters --}}
    <div class="row">
        <div class="col-md-3">
            <div class="card bg-white">
                <div class="card-body">
                    <h5 class="card-title">Total Leads</h5>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card bg-transparent">
                <div class="card-body">
                    <h5 class="card-title">Total Services</h5>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card bg-white">
                <div class="card-body">
                    <h5 class="card-title">Total Users</h5>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card bg-white">
                <div class="card-body">
                    <h5 class="card-title">Total Roles</h5>
                </div>
            </div>
        </div>
    </div>

    {{-- Dashboard tables --}}
    <div class="row mt-4">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Recent Leads</h5>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Organization</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        
                    </table>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Recent Services</h5>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Service Description</th>
                            </tr>
                        </thead>
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
@endsection
