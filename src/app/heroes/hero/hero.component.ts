import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent {

    public name: string = 'Ironman';
    public age: number = 45;

    get capitalizedName(): string {
        return this.name.toUpperCase();
    }

    setName(): void {
        this.name = 'Spiderman';
    }

    setAge(): void {
        this.age = 30;
    }
}