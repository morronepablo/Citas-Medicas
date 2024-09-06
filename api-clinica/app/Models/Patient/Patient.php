<?php

namespace App\Models\Patient;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Patient extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        "name",
        "surname",
        "mobile",
        "email",
        "avatar",
        "birth_date",
        "gender",
        "education",
        "address",
        "antecedent_family",
        "antecedent_personal",
        "antecedent_allergic",
        "current_disease",
        "ta",
        "temperatura",
        "fc",
        "fr",
        "peso",
        "n_document",
    ];


    public function setCreatedAtAttribute($value)
    {
        date_default_timezone_set('America/Argentina/Buenos_Aires');
        $this->attributes["created_at"] = Carbon::now();
    }

    public function setUpdatedAtAttribute($value)
    {
        date_default_timezone_set("America/Argentina/Buenos_Aires");
        $this->attributes["updated_at"] = Carbon::now();
    }

    public function person()
    {
        return $this->hasOne(PatientPerson::class, "patient_id");
    }
}
