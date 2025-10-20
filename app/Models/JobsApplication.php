<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class JobsApplication extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * Nama tabel yang sesuai dengan migration (best practice: snake_case, plural)
     */
    protected $table = 'jobs_applications'; // DIUBAH

    /**
     * Primary key kustom
     */
    protected $primaryKey = 'id_jobs';

    /**
     * Gunakan $fillable SAJA, jangan bersamaan dengan $guarded
     */
    protected $fillable = [
        'companyName',
        'position',
        'applicationPlatform',
        'applicationDate',
        'status',
        'statusUpdateDate',
        'notes',
        'user_id',
    ];

    // HAPUS properti $guarded karena sudah ada $fillable
}