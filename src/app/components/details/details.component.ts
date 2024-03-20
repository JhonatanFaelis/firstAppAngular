import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from 'src/app/housinglocation';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private housingService : HousingService,
    private formReative : FormBuilder
    ){}

  housingId : number = -1;

  housingLocation : HousingLocation | undefined

  public applyForm = this.formReative.group({
    firstName : ['', Validators.required],
    lastName : ['', Validators.required],
    email : ['', Validators.required]
  })

  ngOnInit(): void {
    this.getHousingInformationById()
  }

  
  getHousingInformationById () : void {
    const id = Number(this.route.snapshot.params['id'])
    this.housingLocation = this.housingService.getHousingById(id)
  }

  submitApplication (): void{
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    )
    alert('Formulario enviado com sucesso!')
    this.applyForm.reset();
  }

}
